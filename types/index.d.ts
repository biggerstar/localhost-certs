export declare function key(): string

export declare function cert(): string

export declare function viteCertsPlugin(): {  // 懒得v引入vite的Plugin
    [key: string]: any
    name: string
}
