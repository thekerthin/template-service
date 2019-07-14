module.exports = {
  "type": "postgres",
  "url": "postgresql://root:password@0.0.0.0/template_service",
  "entities": [
    "src/database/entities/**/*.ts"
  ],
  "migrations": [
    "src/database/migrations/**/*.ts"
  ],
  "cli": {
    "migrationsDir": "src/database/migrations"
  },
};
