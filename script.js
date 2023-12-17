function byteSize(str) {
  // Check for empty string
  if (str === '') {
    return 0;
  }

  // Create a TextEncoder instance with UTF-8 encoding
  const encoder = new TextEncoder('utf-8');

  // Encode the string and return the byte length
  const encoded = encoder.encode(str);
  return encoded.length;
}