module.exports = {
  plugins: [
    "prettier-plugin-packagejson",
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-prisma",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "server-only",
    "^@([^/]+)(.*)/?(.*)$",
    "^@/(.*)/?(.*)$",
    "^[./]",
  ],
  // importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
};
