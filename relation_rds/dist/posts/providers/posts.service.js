"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const post_entity_1 = require("../post.entity");
const meta_option_entity_1 = require("../../meta-options/meta-option.entity");
const typeorm_2 = require("@nestjs/typeorm");
const user_service_1 = require("../../user/user.service");
let PostsService = class PostsService {
    postRepository;
    metaOptionRepository;
    usersService;
    constructor(postRepository, metaOptionRepository, usersService) {
        this.postRepository = postRepository;
        this.metaOptionRepository = metaOptionRepository;
        this.usersService = usersService;
    }
    async create(createPostDto) {
        const { metaOptions, authorId, ...rest } = createPostDto;
        const user = await this.usersService.findOne(authorId);
        if (!user) {
            throw new Error(`Author with ID ${authorId} not found`);
        }
        const post = this.postRepository.create({
            ...rest,
            metaOptions: metaOptions ? { ...metaOptions } : undefined,
            author: user,
        });
        return this.postRepository.save(post);
    }
    async findAll() {
        return this.postRepository.find({
            relations: ['metaOptions'],
        });
    }
    async delete(id) {
        const post = await this.postRepository.findOne({
            where: { id },
            relations: {
                metaOptions: true,
            },
        });
        console.log(post?.metaOptions);
        if (post)
            await this.postRepository.delete(id);
        if (post?.metaOptions)
            await this.metaOptionRepository.delete(post.metaOptions.id);
        return { success: true, id };
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(post_entity_1.Post)),
    __param(1, (0, typeorm_2.InjectRepository)(meta_option_entity_1.MetaOption)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        user_service_1.UserService])
], PostsService);
//# sourceMappingURL=posts.service.js.map