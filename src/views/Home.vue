<template>
    <Layout>
        <a-space wrap>
            <a-button type="primary" block>
                <template #icon>
                    <PlusOutlined />
                </template>
                添加
            </a-button>
            <a-input v-model:value="value" placeholder="搜索">
                <template #prefix>
                    <SearchOutlined />
                </template>
            </a-input>
            <a-button type="primary">刷新</a-button>
        </a-space>
        <a-table
            :columns="columns"
            :data-source="data"
            :style="{ margin: '10px 0 0 0' }"
            :pagination="{ pageSize: 13 }"
            :scroll="{ y: 750 }"
        >
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'tags'">
                    <a-tag
                        v-for="tag in record.tags"
                        :key="tag"
                        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                    >
                        {{ tag.toUpperCase() }}
                    </a-tag>
                </template>
                <template v-if="column.key === 'action'">
                    <span>
                        <a>{{ record.name }}</a>
                        <a-divider type="vertical" />
                        <a>Delete</a>
                        <a-divider type="vertical" />
                        <a>Add</a>
                        <a-divider type="vertical" />
                        <a>Modify</a>
                    </span>
                </template>
            </template>
        </a-table>
    </Layout>
</template>

<script>
import Layout from '../components/Layout.vue';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons-vue';
export default {
    components: {
        Layout,
        PlusOutlined,
        SearchOutlined,
    },
    data() {
        return {
            value: '',
            columns: [
                {
                    title: '序号',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '地址',
                    dataIndex: 'address',
                    key: 'address'
                },
                {
                    title: '标签',
                    key: 'tags',
                    dataIndex: 'tags',
                },
                {
                    title: '操作',
                    key: 'action'
                }
            ],
            data: [
                {
                    id: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    id: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    id: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    id: '4',
                    name: 'Monster',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    id: '5',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    id: '6',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    id: '7',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    id: '8',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    id: '9',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    id: '10',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    id: '11',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    id: '12',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    id: '13',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    id: '14',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    id: '15',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    id: '16',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                }
            ]
        }
    }
}
</script>
