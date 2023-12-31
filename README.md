# vue2_test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

# 笔记

## ref 属性

    1. 被用来给元素或子组件注册引用信息（id的替代者）

    2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（Vuecomponent）

    3. 使用方式：

            打标识： <h1 ref="xxx">.....</h1>, 或 <school ref="xxxx"></school>
            获取： this.$refs.xxx

## 配置项 props

    功能：让组件接收外部传来的数据

        （1）传递数据：

                <Demo name="xxxx"></Demo>
         (2) 接收数据：

                第一种方式（只接收）：
                    props:['name']

                第二种方式（限制类型）：
                    props:{
                        name:String
                    }

                第三种方式（限制类型、限制必要性、指定默认值）：
                    props:{
                        name:{
                            type: String, // 类型
                            required: true, // 必要性
                            default: '老王' // 默认值
                        }
                    }

    备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告（warn），若业务需求确实要改，那么请赋值props的内容到data中一份，然后去修改data中的数据



## mixin（混入）

    功能：可以把多个组件共用的配置提取成一个混入对象

    使用方式：

        第一步定义混合，例如：
            {
                data(){...},
                methods:{...}
            }

        第二步使用混入，例如：
            (1) 全局混入：Vue.mixin(xxx) // 在main.js里面写
            (2) 局部混入：mixins:['xxx'] // 在组件里写



## scoped样式

    作用：让样式在局部生效，防止冲突

    写法： <style scoped>



## 总结TodoList案例

1. 组件化编码流程：

    （1）拆分静态组件：组件要按照功能拆分，命名不要与html元素冲突

    （2）实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：

        1）一个组件在用：放在组件自身即可
        2）一些组件在用：放在他们共同的父组件上（**状态提升**）
    （3）实现交互：从绑定事件开始

2. props适用于：

    （1）父组件 ===> 子组件通信
    （2）子组件 ===> 父组件通信（要求父先给子一个函数）

3. 使用v-model时，切记：v-model绑定的值不能是props传过来的值，因为props是不可以被修改的

4. props传过来的若是对象类型的值，修改对象中的属性时，Vue不会报错，但不推荐这么做



## 组件的自定义事件

1. 一种组件间的通信方式，适用于：子组件 ===> 父组件

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（**事件的回调在A中**）

3. 绑定自定义事件：

    第一种方式，在父组件中：<Demo @zidingyi="test"/> 或 <Demo v-on:zidingyi="test"/>(其中，zidingyi是绑定的事件，意思是当该事件被触发，test函数会被执行)

    第二种方式，在父组件中：

        <Demo ref="demo"/>
        ...
        mounted(){
            this.$refs.xxx.$on('zidingyi',this.test)
        }

4. 触发自定义事件：this.$emit('zidingyi',数据)



## 四个 map 方法的使用

    mapState方法：用于帮助映射state中的数据为计算属性

        computed: {
            // 借助mapState生成计算属性：sum、school、subject（对象写法一）
            ...mapState({sum:'sum',school:'school',subject:'subject'}),

            // 借助mapState生成计算属性：sum、school、subject（数组写法二）
            ...mapState(['sum','school','subject']),
        },

    mapGetters方法：用于帮助映射getters中的数据为计算属性  

        computed: {
            //借助mapGetters生成计算属性：bigSum（对象写法一）
            ...mapGetters({bigSum:'bigSum'}),

            //借助mapGetters生成计算属性：bigSum（数组写法二）
            ...mapGetters(['bigSum'])
        },

    mapActions方法：用于帮助生成与actions对话的方法，即包含$store.dispatch(xxx)的函数  

        methods:{
            //靠mapActions生成：incrementOdd、incrementWait（对象形式）
            ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

            //靠mapActions生成：incrementOdd、incrementWait（数组形式）
            ...mapActions(['jiaOdd','jiaWait'])
        }

    mapMutations方法：用于帮助生成与mutations对话的方法，即包含$store.commit(xxx)的函数  

        methods:{
            //靠mapActions生成：increment、decrement（对象形式）
            ...mapMutations({increment:'JIA',decrement:'JIAN'}),
            
            //靠mapMutations生成：JIA、JIAN（对象形式）
            ...mapMutations(['JIA','JIAN']),
        }
        
    注意：mapActions与mapMutations使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象