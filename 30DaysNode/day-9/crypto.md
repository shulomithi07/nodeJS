So this is all about cryto module
This chapter is about HASH and HMAC
Crypto module can do cryptographic functionalities
This includes hashing, hmac. verify, cipher, decipher and sign functions.


Hashing
This is process of generating a fixed lenght of value from a string using mathematical functions.
This is used for security

Every hash which is generated is unique, fixed length, and irreversible.
unique --> When a string is given to hashing function it gives the output no matter how many times you give the same string it will give the same output.
fixed length --> Hashing algorithm always gives the same length output. The input length doesn't affect the output string.
irreversible --> The hashes are irreverisble in nature.

Some of the hashing algorithms are
md5 hashing algorithm
Whirlpool hashing algorithm
SHA1 hashing algorithm
SHA224 hashing algorithm
SHA256 hashing algorithm
SHA384 hashing algorithm
SHA512 hashing algorithm
Ripemd-160 hashing algorithm
To perform hashing on a file, streams and filesystem can be used.


HAMC 
This stands for hash message authentication code, which involves in performing the hash functions using a secrete cryptographic key.
Just like hash hmac is also unique, fixed length, irreversible.

Some of the HMAC algorithms are as follows
SHA256 HMAC
SHA512 HMAC
md5 HMAC
Whirlpool HMACs

