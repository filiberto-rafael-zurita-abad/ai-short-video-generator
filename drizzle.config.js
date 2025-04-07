/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:W43UiNQVJdDm@ep-proud-leaf-a56t0nbi-pooler.us-east-2.aws.neon.tech/ai-short-video-generator?sslmode=require',
    }
};