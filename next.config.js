/** @type {import('next').NextConfig} */
const intercept = require("intercept-stdout")

function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return ""
  }
  return text
}

if (process.env.NODE_ENV === "development") {
  intercept(interceptStdout)
}

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig