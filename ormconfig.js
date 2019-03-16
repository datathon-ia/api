const SOURCE_PATH = process.env.NODE_ENV === 'production' ? 'dist' : 'src'

module.exports = {
  type: 'mysql',
  port: 3306,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${SOURCE_PATH}/**/**.entity{.ts,.js}`],
  synchronize: true,
}
