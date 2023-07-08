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
	npm run build
	mkdir -p ../domain-admin/domain_admin/public/m
	cp -r ./dist/build/h5/* ../domain-admin/domain_admin/public/m
