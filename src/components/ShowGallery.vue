<script setup lang="ts"></script>

<template>
    <!-- 主要内容 -->
    <main class="container">
        <!-- 排版部分 -->
        <section id="typography" class="section">
            <h2 class="section-title title">排版系统</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-font"></i> 标题示例
                        </div>
                        <div class="card-body">
                            <h1>h1. 一级标题</h1>
                            <h2>h2. 二级标题</h2>
                            <h3>h3. 三级标题</h3>
                            <h4>h4. 四级标题</h4>
                            <h5>h5. 五级标题</h5>
                            <h6>h6. 六级标题</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-paragraph"></i> 文本示例
                        </div>
                        <div class="card-body">
                            <p>这是一个段落文本示例。暗黑风格设计减少了视觉疲劳，米白色文字提供了良好的可读性。</p>
                            <p class="text-muted">这是一个淡色文本，用于辅助内容。</p>
                            <p class="text-primary">这是一个主要颜色文本。</p>
                            <p class="text-success">这是一个成功颜色文本。</p>
                            <p class="text-warning">这是一个警告颜色文本。</p>
                            <p class="text-danger">这是一个危险颜色文本。</p>
                            <p><strong>加粗文本</strong> 和 <em>斜体文本</em> 以及 <u>下划线文本</u>。</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-list"></i> 列表示例
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <h5>无序列表</h5>
                                    <ul>
                                        <li>列表项 1</li>
                                        <li>列表项 2
                                            <ul>
                                                <li>嵌套列表项 1</li>
                                                <li>嵌套列表项 2</li>
                                            </ul>
                                        </li>
                                        <li>列表项 3</li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <h5>有序列表</h5>
                                    <ol>
                                        <li>第一步</li>
                                        <li>第二步</li>
                                        <li>第三步</li>
                                    </ol>
                                </div>
                                <div class="col-md-4">
                                    <h5>描述列表</h5>
                                    <dl>
                                        <dt>术语 1</dt>
                                        <dd>术语 1 的描述内容</dd>
                                        <dt>术语 2</dt>
                                        <dd>术语 2 的描述内容</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 组件部分 -->
        <section id="components" class="section">
            <h2 class="section-title title">UI组件</h2>

            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-layer-group"></i> 卡片组件
                        </div>
                        <div class="card-body">
                            <p>卡片是展示内容的绝佳方式，具有悬停效果和现代化阴影。</p>
                            <div class="card card-subtle">
                                <div class="card-header">
                                    嵌套卡片
                                </div>
                                <div class="card-body">
                                    这是一个嵌套卡片示例。
                                </div>
                            </div>
                            <p class="mt-3">使用 <code>.card</code> 类创建基础卡片，使用 <code>.card-header</code> 和 <code>.card-body</code> 定义结构。</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-exclamation-triangle"></i> 警告框组件
                        </div>
                        <div class="card-body">
                            <div class="alert alert-primary">
                                <i class="fas fa-info-circle"></i> <strong>主要提示！</strong> 这是一个主要警告框。
                            </div>
                            <div class="alert alert-success">
                                <i class="fas fa-check-circle"></i> <strong>成功！</strong> 操作已成功完成。
                            </div>
                            <div class="alert alert-warning">
                                <i class="fas fa-exclamation-triangle"></i> <strong>警告！</strong> 请检查您的输入。
                            </div>
                            <div class="alert alert-danger">
                                <i class="fas fa-times-circle"></i> <strong>错误！</strong> 操作失败，请重试。
                            </div>
                            <div class="alert alert-accent">
                                <i class="fas fa-star"></i> <strong>特色！</strong> 这是一个特色警告框。
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-chart-line"></i> 进度条组件
                        </div>
                        <div class="card-body">
                            <p>基础进度条：</p>
                            <div class="progress">
                                <div class="progress-bar" style="width: 25%;">25%</div>
                            </div>

                            <p class="mt-3">彩色进度条：</p>
                            <div class="progress">
                                <div class="progress-bar bg-primary" style="width: 40%;">40%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" style="width: 60%;">60%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-warning" style="width: 75%;">75%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-danger" style="width: 90%;">90%</div>
                            </div>

                            <p class="mt-3">条纹进度条：</p>
                            <div class="progress">
                                <div class="progress-bar bg-accent progress-bar-striped" style="width: 50%;">50%</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-tags"></i> 徽章与标签
                        </div>
                        <div class="card-body">
                            <p>徽章示例：</p>
                            <p>
                                <span class="badge">默认徽章</span>
                                <span class="badge badge-primary">主要徽章</span>
                                <span class="badge badge-success">成功徽章</span>
                                <span class="badge badge-warning">警告徽章</span>
                                <span class="badge badge-danger">危险徽章</span>
                                <span class="badge badge-accent">特色徽章</span>
                            </p>

                            <p class="mt-3">不同大小徽章：</p>
                            <p>
                                <span class="badge badge-sm">小徽章</span>
                                <span class="badge">默认徽章</span>
                                <span class="badge badge-lg">大徽章</span>
                            </p>

                            <p class="mt-3">轮廓徽章：</p>
                            <p>
                                <span class="badge badge-outline">轮廓徽章</span>
                                <span class="badge badge-outline badge-primary">主要轮廓</span>
                                <span class="badge badge-outline badge-success">成功轮廓</span>
                            </p>

                            <p class="mt-3">工具提示：</p>
                            <p>
                                <span class="tooltip">悬停查看提示
                                    <span class="tooltip-text">这是一个工具提示内容</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 按钮部分 -->
        <section id="buttons" class="section">
            <h2 class="section-title title">按钮组件</h2>

            <div class="card">
                <div class="card-header">
                    <i class="fas fa-hand-pointer"></i> 按钮样式与状态
                </div>
                <div class="card-body">
                    <p>基础按钮：</p>
                    <div class="button-group">
                        <button class="btn btn-ripple">默认按钮</button>
                        <button class="btn btn-primary btn-ripple">主要按钮</button>
                        <button class="btn btn-success btn-ripple">成功按钮</button>
                        <button class="btn btn-warning btn-ripple">警告按钮</button>
                        <button class="btn btn-danger btn-ripple">危险按钮</button>
                        <button class="btn btn-accent btn-ripple">特色按钮</button>
                        <button class="btn btn-outline btn-ripple">轮廓按钮</button>
                    </div>

                    <p class="mt-4">不同尺寸按钮：</p>
                    <div class="button-group">
                        <button class="btn btn-primary btn-sm btn-ripple">小按钮</button>
                        <button class="btn btn-primary btn-ripple">默认按钮</button>
                        <button class="btn btn-primary btn-lg btn-ripple">大按钮</button>
                        <button class="btn btn-primary btn-xl btn-ripple">超大按钮</button>
                    </div>

                    <p class="mt-4">圆角按钮：</p>
                    <div class="button-group">
                        <button class="btn btn-primary btn-rounded btn-ripple">圆角按钮</button>
                        <button class="btn btn-success btn-rounded btn-lg btn-ripple">大圆角按钮</button>
                        <button class="btn btn-outline btn-rounded btn-ripple">轮廓圆角按钮</button>
                    </div>

                    <p class="mt-4">禁用状态：</p>
                    <div class="button-group">
                        <button class="btn btn-primary btn-ripple" disabled>禁用按钮</button>
                        <button class="btn btn-outline btn-ripple" disabled>禁用轮廓按钮</button>
                    </div>

                    <p class="mt-4">带图标按钮：</p>
                    <div class="button-group">
                        <button class="btn btn-primary btn-ripple">
                            <i class="fas fa-rocket"></i> 发射
                        </button>
                        <button class="btn btn-success btn-ripple">
                            <i class="fas fa-check"></i> 确认
                        </button>
                        <button class="btn btn-danger btn-ripple">
                            <i class="fas fa-trash"></i> 删除
                        </button>
                        <button class="btn btn-accent btn-ripple">
                            <i class="fas fa-star"></i> 收藏
                        </button>
                    </div>

                    <p class="mt-4">按钮组：</p>
                    <div class="btn-group">
                        <button class="btn btn-outline btn-ripple">左侧</button>
                        <button class="btn btn-outline btn-ripple">中间</button>
                        <button class="btn btn-outline btn-ripple">右侧</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- 表单部分 -->
        <section id="forms" class="section">
            <h2 class="section-title title">表单组件</h2>

            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-edit"></i> 表单控件
                        </div>
                        <div class="card-body">
                            <form id="exampleForm">
                                <div class="form-group">
                                    <label for="exampleInput">文本输入</label>
                                    <input type="text" class="form-control" id="exampleInput" placeholder="请输入文本">
                                    <div class="form-text">这是一个帮助文本示例</div>
                                </div>

                                <div class="form-group">
                                    <label for="exampleEmail">邮箱地址</label>
                                    <input type="email" class="form-control" id="exampleEmail" placeholder="name@example.com">
                                </div>

                                <div class="form-group">
                                    <label for="examplePassword">密码</label>
                                    <input type="password" class="form-control" id="examplePassword" placeholder="请输入密码">
                                </div>

                                <div class="form-group">
                                    <label for="exampleSelect">下拉选择</label>
                                    <select class="form-control" id="exampleSelect">
                                        <option selected>请选择一个选项</option>
                                        <option value="1">选项一</option>
                                        <option value="2">选项二</option>
                                        <option value="3">选项三</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="exampleTextarea">文本区域</label>
                                    <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="请输入多行文本"></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="exampleRange">范围选择</label>
                                    <input type="range" class="form-control-range" id="exampleRange" min="0" max="100">
                                </div>

                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">同意条款</label>
                                </div>

                                <div class="form-check">
                                    <input type="radio" class="form-check-input" name="exampleRadio" id="exampleRadio1" checked>
                                    <label class="form-check-label" for="exampleRadio1">选项一</label>
                                </div>

                                <div class="form-check">
                                    <input type="radio" class="form-check-input" name="exampleRadio" id="exampleRadio2">
                                    <label class="form-check-label" for="exampleRadio2">选项二</label>
                                </div>

                                <button type="submit" class="btn btn-primary btn-ripple mt-3">提交表单</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-sliders-h"></i> 表单状态
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="validInput">有效状态</label>
                                <input type="text" class="form-control is-valid" id="validInput" value="正确输入">
                                <div class="valid-feedback">输入正确！</div>
                            </div>

                            <div class="form-group">
                                <label for="invalidInput">无效状态</label>
                                <input type="text" class="form-control is-invalid" id="invalidInput" value="错误输入">
                                <div class="invalid-feedback">请输入有效内容</div>
                            </div>

                            <div class="form-group">
                                <label for="disabledInput">禁用状态</label>
                                <input type="text" class="form-control" id="disabledInput" placeholder="禁用输入" disabled>
                            </div>

                            <div class="form-group">
                                <label for="readonlyInput">只读状态</label>
                                <input type="text" class="form-control" id="readonlyInput" value="只读内容" readonly>
                            </div>

                            <div class="form-group">
                                <label for="fileInput">文件上传</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="fileInput">
                                    <label class="custom-file-label" for="fileInput">选择文件</label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>开关控件</label>
                                <div class="custom-switch">
                                    <input type="checkbox" id="customSwitch1" class="custom-switch-input">
                                    <label for="customSwitch1" class="custom-switch-label">启用功能</label>
                                </div>

                                <div class="custom-switch">
                                    <input type="checkbox" id="customSwitch2" class="custom-switch-input" checked>
                                    <label for="customSwitch2" class="custom-switch-label">启用通知</label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>复选框组</label>
                                <div class="checkbox-group">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="checkbox1" checked>
                                        <label class="form-check-label" for="checkbox1">选项一</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="checkbox2">
                                        <label class="form-check-label" for="checkbox2">选项二</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="checkbox3">
                                        <label class="form-check-label" for="checkbox3">选项三</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 表格部分 -->
        <section id="tables" class="section">
            <h2 class="section-title title">表格组件</h2>

            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-table"></i> 基础表格
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>用户名</th>
                                            <th>邮箱</th>
                                            <th>角色</th>
                                            <th>状态</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>张三</td>
                                            <td>zhangsan@example.com</td>
                                            <td><span class="badge badge-primary">管理员</span></td>
                                            <td><span class="status-indicator status-active"></span> 活跃</td>
                                            <td>
                                                <button class="btn btn-sm btn-outline btn-ripple">编辑</button>
                                                <button class="btn btn-sm btn-danger btn-ripple">删除</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>李四</td>
                                            <td>lisi@example.com</td>
                                            <td><span class="badge badge-success">编辑者</span></td>
                                            <td><span class="status-indicator status-inactive"></span> 停用</td>
                                            <td>
                                                <button class="btn btn-sm btn-outline btn-ripple">编辑</button>
                                                <button class="btn btn-sm btn-danger btn-ripple">删除</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>王五</td>
                                            <td>wangwu@example.com</td>
                                            <td><span class="badge badge-accent">VIP</span></td>
                                            <td><span class="status-indicator status-pending"></span> 待定</td>
                                            <td>
                                                <button class="btn btn-sm btn-outline btn-ripple">编辑</button>
                                                <button class="btn btn-sm btn-danger btn-ripple">删除</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-th"></i> 条纹表格
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>产品</th>
                                            <th>价格</th>
                                            <th>库存</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>产品 A</td>
                                            <td>$19.99</td>
                                            <td>45</td>
                                        </tr>
                                        <tr>
                                            <td>产品 B</td>
                                            <td>$29.99</td>
                                            <td>23</td>
                                        </tr>
                                        <tr>
                                            <td>产品 C</td>
                                            <td>$9.99</td>
                                            <td>78</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-border-all"></i> 边框表格
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>日期</th>
                                            <th>项目</th>
                                            <th>进度</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2026-01-01</td>
                                            <td>项目 A</td>
                                            <td>
                                                <div class="progress">
                                                    <div class="progress-bar bg-success" style="width: 75%">75%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2026-01-02</td>
                                            <td>项目 B</td>
                                            <td>
                                                <div class="progress">
                                                    <div class="progress-bar bg-warning" style="width: 40%">40%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2026-01-03</td>
                                            <td>项目 C</td>
                                            <td>
                                                <div class="progress">
                                                    <div class="progress-bar bg-danger" style="width: 90%">90%</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 对话框部分 -->
        <!--
        <section id="dialogs" class="section">
            <h2 class="section-title title">对话框组件</h2>

            <div class="card">
                <div class="card-header">
                    <i class="fas fa-window-restore"></i> 对话框示例
                </div>
                <div class="card-body">
                    <p>对话框是重要的交互组件，用于显示重要信息、确认操作或收集用户输入。</p>

                    <div class="button-group">
                        <button class="btn btn-primary btn-ripple" id="openSimpleDialogBtn">
                            <i class="fas fa-info-circle"></i> 简单对话框
                        </button>
                        <button class="btn btn-success btn-ripple" id="openFormDialogBtn">
                            <i class="fas fa-edit"></i> 表单对话框
                        </button>
                        <button class="btn btn-warning btn-ripple" id="openWarningDialogBtn">
                            <i class="fas fa-exclamation-triangle"></i> 警告对话框
                        </button>
                        <button class="btn btn-danger btn-ripple" id="openDeleteDialogBtn">
                            <i class="fas fa-trash"></i> 删除对话框
                        </button>
                        <button class="btn btn-accent btn-ripple" id="openLargeDialogBtn">
                            <i class="fas fa-expand"></i> 大对话框
                        </button>
                    </div>

                    <div class="mt-4">
                        <h5>对话框特性：</h5>
                        <ul>
                            <li>平滑的淡入淡出动画</li>
                            <li>响应式设计，适配移动设备</li>
                            <li>按ESC键或点击外部区域可关闭</li>
                            <li>滚动锁定，防止背景滚动</li>
                            <li>支持不同大小和类型</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        -->

        <!-- 工具类部分 -->
        <section id="utilities" class="section">
            <h2 class="section-title title">工具类</h2>

            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-palette"></i> 颜色工具
                        </div>
                        <div class="card-body">
                            <div class="color-grid">
                                <div class="color-item bg-primary">主要背景</div>
                                <div class="color-item bg-secondary">次要背景</div>
                                <div class="color-item bg-success">成功背景</div>
                                <div class="color-item bg-warning">警告背景</div>
                                <div class="color-item bg-danger">危险背景</div>
                                <div class="color-item bg-accent">特色背景</div>
                                <div class="color-item text-primary">主要文字</div>
                                <div class="color-item text-secondary">次要文字</div>
                                <div class="color-item text-success">成功文字</div>
                                <div class="color-item text-warning">警告文字</div>
                                <div class="color-item text-danger">危险文字</div>
                                <div class="color-item text-accent">特色文字</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-border-style"></i> 边距与填充
                        </div>
                        <div class="card-body">
                            <div class="spacing-demo mb-3 p-3 border">
                                <code>.mb-3 .p-3 .border</code> - 下边距3，内边距3，边框
                            </div>
                            <div class="spacing-demo mt-4 mx-auto px-4 py-2 border rounded">
                                <code>.mt-4 .mx-auto .px-4 .py-2 .border .rounded</code> - 上边距4，水平居中，水平内边距4，垂直内边距2，边框，圆角
                            </div>
                            <div class="spacing-demo my-5 p-5 bg-secondary">
                                <code>.my-5 .p-5 .bg-secondary</code> - 垂直边距5，内边距5，次要背景
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-eye"></i> 可见性
                        </div>
                        <div class="card-body">
                            <div class="visible-example">
                                <div class="d-block p-2 bg-primary text-white">.d-block 显示为块级</div>
                                <div class="d-inline p-2 bg-success text-white">.d-inline 显示为内联</div>
                                <div class="d-inline p-2 bg-warning text-white">.d-inline 显示为内联</div>
                                <div class="d-flex p-2 bg-danger text-white mt-2">
                                    <div class="mr-2">.d-flex 弹性布局</div>
                                    <div>项目二</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-arrows-alt"></i> 浮动与定位
                        </div>
                        <div class="card-body">
                            <div class="position-relative border p-4" style="height: 150px;">
                                <div class="position-absolute top-0 start-0 p-2 bg-primary">左上</div>
                                <div class="position-absolute top-0 end-0 p-2 bg-success">右上</div>
                                <div class="position-absolute bottom-0 start-0 p-2 bg-warning">左下</div>
                                <div class="position-absolute bottom-0 end-0 p-2 bg-danger">右下</div>
                                <div class="position-absolute top-50 start-50 translate-middle p-2 bg-accent">居中</div>
                            </div>
                            <div class="mt-3">
                                <div class="float-start p-2 bg-secondary">左浮动</div>
                                <div class="float-end p-2 bg-secondary">右浮动</div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped></style>
