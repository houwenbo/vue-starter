module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 自定义规则（规则必须使用 UTF-8 的编码）
  rules: {
    // type 类型定义：表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2, // 当前验证的错误级别
      'always', // 在什么情况下进行验证
      [
        'feature', // 新功能 feature
        'bugfix', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构(既不增加新功能 feature 也不是修复 bug )
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build' // 打包
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}
