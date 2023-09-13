export default {
  type: 'mysql', // 选用的数据库
  host: process.env.DB_HOST, // 数据库地址
  port: Number(process.env.DB_PORT), // 数据库端口
  username: process.env.DB_USER, // 数据库用户名
  password: process.env.DB_PASS, // 数据库密码
  database: process.env.DB_DATABASE, // 数据库
  synchronize: false, // 是否同步true表示会自动将src/entity里面定义的数据模块同步到数据库生成数据表(已经存在的表的时候再运行会报错) 生产环境应改为false 通过命令行操作更新数据库
  dropSchema: true, // 删除数据库中的表
  logging: false, // 是否打印日志,执行sql语句时候输出原生sql,也可以配置成一个数组["query", "error", "schema"]指定sql的执行类型
  charset: 'utf8mb4', // 编码
  timezone: 'local', // 时区,默认本地,也可以写"+8"
  entityPrefix: '', // 给此数据库连接上的所有表（或集合）加的前缀。
  entities: ['entity/*.js'],
  migrations: ['migration/*.js'],
  subscribers: [
    // 订阅(用的少)
    'src/subscribers/**/*.ts',
  ],
  cli: {
    migrationsDir: 'migration',
  },
};
