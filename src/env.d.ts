/// <reference types="vite/client" />

interface ImportMeta {
    readonly env: ImportMetaEnv;
    glob: (pattern: string, options?: { eager?: boolean }) => Record<string, string>;
}

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    // 其他环境变量可以根据需要添加
    // readonly VITE_API_URL: string;
}
