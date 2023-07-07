# 启动开发环境
.PHONY: dev
dev:
	npm run dev

# 发布到测试环境
.PHONY: dep-dev
dep-dev:
	npm run dep-pro

# 发布到测试环境
.PHONY: dep-pro
dep-pro:
	npm version patch
	npm run dep-pro