/*
	What follows is public domain
	BLAKE2s hash function in pure Javascript
	Adapted from the reference implementation in RFC7693
	Ported to Javascript by DC - https://github.com/dcposch
	Creative Commons CC0. Ported from the reference C implementation in RFC 7693.
*/

function hexString (input) {
	return Array.from(uint8Array(input))
		.map(byte => byte.toString(16).padStart(2, '0'))
		.join('');
}

function uint8Array (input) {
	input = normalizeInput(input);
	const ctx = blake2sInit(32);
	blake2sUpdate(ctx, input);
	return blake2sFinal(ctx);
}

function normalizeInput (input) {
	if (input instanceof Uint8Array) {
		return input;
	} else if (typeof input === 'string') {
		const encoder = new TextEncoder();
		return encoder.encode(input);
	} else {
		throw new Error("Input must be an string, Buffer or Uint8Array");
	}
}

function blake2sInit (outlen) {
	if (!(outlen > 0 && outlen <= 32)) {
		throw new Error("Incorrect output length, should be in [1, 32]");
	}
	
	const ctx = {
		h: new Uint32Array(BLAKE2S_IV), // hash state
		b: new Uint8Array(64), // input block
		c: 0, // pointer within block
		t: 0, // input count
		outlen: outlen // output length in bytes
	};
	ctx.h[0] ^= 0x01010000 ^ (0 << 8) ^ outlen;
	
	return ctx;
}

function blake2sUpdate (ctx, input) {
	for (let i = 0; i < input.length; i++) {
		if (ctx.c === 64) {
			ctx.t += ctx.c; // add counters
			blake2sCompress(ctx, false); // compress (not last)
			ctx.c = 0; // counter to zero
		}
		ctx.b[ctx.c++] = input[i];
	}
}

function blake2sCompress (ctx, last) {
	let i = 0;
	for (i = 0; i < 8; i++) {
		v[i] = ctx.h[i];
		v[i + 8] = BLAKE2S_IV[i];
	}
	
	v[12] ^= ctx.t; // low 32 bits of offset
	v[13] ^= ctx.t / 0x100000000; // high 32 bits
	if (last) v[14] = ~v[14];
	
	for (i = 0; i < 16; i++) {
		m[i] = B2S_GET32(ctx.b, 4 * i);
	}
	
	for (i = 0; i < 10; i++) {
		B2S_G(0, 4, 8, 12, m[SIGMA[i * 16 + 0]], m[SIGMA[i * 16 + 1]]);
		B2S_G(1, 5, 9, 13, m[SIGMA[i * 16 + 2]], m[SIGMA[i * 16 + 3]]);
		B2S_G(2, 6, 10, 14, m[SIGMA[i * 16 + 4]], m[SIGMA[i * 16 + 5]]);
		B2S_G(3, 7, 11, 15, m[SIGMA[i * 16 + 6]], m[SIGMA[i * 16 + 7]]);
		B2S_G(0, 5, 10, 15, m[SIGMA[i * 16 + 8]], m[SIGMA[i * 16 + 9]]);
		B2S_G(1, 6, 11, 12, m[SIGMA[i * 16 + 10]], m[SIGMA[i * 16 + 11]]);
		B2S_G(2, 7, 8, 13, m[SIGMA[i * 16 + 12]], m[SIGMA[i * 16 + 13]]);
		B2S_G(3, 4, 9, 14, m[SIGMA[i * 16 + 14]], m[SIGMA[i * 16 + 15]]);
	}
	
	for (i = 0; i < 8; i++) {
		ctx.h[i] ^= v[i] ^ v[i + 8];
	}
}

function B2S_GET32 (v, i) {
	return v[i] ^ (v[i + 1] << 8) ^ (v[i + 2] << 16) ^ (v[i + 3] << 24);
}

function B2S_G (a, b, c, d, x, y) {
	v[a] = v[a] + v[b] + x;
	v[d] = ROTR32(v[d] ^ v[a], 16);
	v[c] = v[c] + v[d];
	v[b] = ROTR32(v[b] ^ v[c], 12);
	v[a] = v[a] + v[b] + y;
	v[d] = ROTR32(v[d] ^ v[a], 8);
	v[c] = v[c] + v[d];
	v[b] = ROTR32(v[b] ^ v[c], 7);
}

function ROTR32 (x, y) {
	return (x >>> y) ^ (x << (32 - y));
}

function blake2sFinal (ctx) {
	ctx.t += ctx.c; // mark last block offset
	while (ctx.c < 64) {
		ctx.b[ctx.c++] = 0;
	}
	blake2sCompress(ctx, true); // final block flag = 1
	
	// little endian convert and store
	const out = new Uint8Array(ctx.outlen);
	for (let i = 0; i < ctx.outlen; i++) {
		out[i] = (ctx.h[i >> 2] >> (8 * (i & 3))) & 0xff;
	}
	return out;
}

const BLAKE2S_IV = new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]);

const SIGMA = new Uint8Array([
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2,
	15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12,
	6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11,
	7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15,
	11, 9, 14, 3, 12, 13, 0
]);

const v = new Uint32Array(16);
const m = new Uint32Array(16);

module.exports = {
	hexString,
	uint8Array,
}
