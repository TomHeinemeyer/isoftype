/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["./src"],
  verbose: true,
  transform: {
    "^.+\\.(t|j)s$": [
      "ts-jest",
      { diagnostics: { ignoreCodes: ["TS151001"] } },
    ],
  },
}

export default config
