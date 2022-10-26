module.exports = {
  extends: "./.eslintrc.base.cjs",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
        // This option breaks linting only when running on GitHub Actions (?!)
        allowAutomaticSingleRunInference: true,
        // errorOnTypeScriptSyntacticAndSemanticIssues: true,
        debugLevel: ['typescript-eslint', 'typescript' ],
      },
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
      ],
    },
  ],
};
