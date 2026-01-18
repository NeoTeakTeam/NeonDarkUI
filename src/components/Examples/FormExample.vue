<script setup lang="ts"></script>

<template>
    <section id="forms" class="section">
        <h2 class="section-title title">表单组件</h2>

        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-edit"></i> 表单控件 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <form id="exampleForm">
                            <div class="form-group">
                                <label for="exampleInput">文本输入</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInput"
                                    placeholder="请输入文本"
                                />
                                <div class="form-text">
                                    这是一个帮助文本示例
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="exampleEmail">邮箱地址</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleEmail"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div class="form-group">
                                <label for="examplePassword">密码</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="examplePassword"
                                    placeholder="请输入密码"
                                />
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
                                <textarea
                                    class="form-control"
                                    id="exampleTextarea"
                                    rows="3"
                                    placeholder="请输入多行文本"
                                ></textarea>
                            </div>

                            <div class="form-group">
                                <label for="exampleRange">范围选择</label>
                                <input
                                    type="range"
                                    class="form-control-range"
                                    id="exampleRange"
                                    min="0"
                                    max="100"
                                />
                            </div>

                            <div class="form-check">
                                <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="exampleCheck1"
                                />
                                <label
                                    class="form-check-label"
                                    for="exampleCheck1"
                                    >同意条款</label
                                >
                            </div>

                            <div class="form-check">
                                <input
                                    type="radio"
                                    class="form-check-input"
                                    name="exampleRadio"
                                    id="exampleRadio1"
                                    checked
                                />
                                <label
                                    class="form-check-label"
                                    for="exampleRadio1"
                                    >选项一</label
                                >
                            </div>

                            <div class="form-check">
                                <input
                                    type="radio"
                                    class="form-check-input"
                                    name="exampleRadio"
                                    id="exampleRadio2"
                                />
                                <label
                                    class="form-check-label"
                                    for="exampleRadio2"
                                    >选项二</label
                                >
                            </div>

                            <button
                                type="submit"
                                class="btn btn-primary btn-ripple mt-3"
                            >
                                提交表单
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-sliders-h"></i> 表单状态 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="validInput">有效状态</label>
                            <input
                                type="text"
                                class="form-control is-valid"
                                id="validInput"
                                value="正确输入"
                            />
                            <div class="valid-feedback">输入正确！</div>
                        </div>

                        <div class="form-group">
                            <label for="invalidInput">无效状态</label>
                            <input
                                type="text"
                                class="form-control is-invalid"
                                id="invalidInput"
                                value="错误输入"
                            />
                            <div class="invalid-feedback">请输入有效内容</div>
                        </div>

                        <div class="form-group">
                            <label for="disabledInput">禁用状态</label>
                            <input
                                type="text"
                                class="form-control"
                                id="disabledInput"
                                placeholder="禁用输入"
                                disabled
                            />
                        </div>

                        <div class="form-group">
                            <label for="readonlyInput">只读状态</label>
                            <input
                                type="text"
                                class="form-control"
                                id="readonlyInput"
                                value="只读内容"
                                readonly
                            />
                        </div>

                        <div class="form-group">
                            <label for="fileInput">文件上传</label>
                            <div class="custom-file">
                                <input
                                    type="file"
                                    class="custom-file-input"
                                    id="fileInput"
                                />
                                <label class="custom-file-label" for="fileInput"
                                    >选择文件</label
                                >
                            </div>
                        </div>

                        <div class="form-group">
                            <label>开关控件</label>
                            <div class="custom-switch">
                                <input
                                    type="checkbox"
                                    id="customSwitch1"
                                    class="custom-switch-input"
                                />
                                <label
                                    for="customSwitch1"
                                    class="custom-switch-label"
                                    >启用功能</label
                                >
                            </div>

                            <div class="custom-switch">
                                <input
                                    type="checkbox"
                                    id="customSwitch2"
                                    class="custom-switch-input"
                                    checked
                                />
                                <label
                                    for="customSwitch2"
                                    class="custom-switch-label"
                                    >启用通知</label
                                >
                            </div>
                        </div>

                        <div class="form-group">
                            <label>复选框组</label>
                            <div class="checkbox-group">
                                <div class="form-check">
                                    <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="checkbox1"
                                        checked
                                    />
                                    <label
                                        class="form-check-label"
                                        for="checkbox1"
                                        >选项一</label
                                    >
                                </div>
                                <div class="form-check">
                                    <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="checkbox2"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="checkbox2"
                                        >选项二</label
                                    >
                                </div>
                                <div class="form-check">
                                    <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="checkbox3"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="checkbox3"
                                        >选项三</label
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
