export const mysqlDevDbConfig = {
    type:'mysql',
    host: '',
    username: '',
    password: '',
    database: "chatApp",
    entities: ['dist/src/**/*.entity{.ts,.js}'],
    synchronize: false, // true is Unsafe, not use for product and migration
    migrations: ['dist/src/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
}