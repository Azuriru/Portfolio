<script lang="ts">
    import type { MaskIcon } from './Mask';

    export let icon: MaskIcon;
    export let href: string | null = null;
    export let size: number | null = null;
    export let maskSize: number | null = null;

    const DEFAULT_HREF = {
        html: 'https://www.w3.org/html/',
        css: 'https://www.w3.org/Style/CSS/Overview.en.html',
        javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        typescript: 'https://www.typescriptlang.org/',
        sass: 'https://sass-lang.com/',
        svelte: 'https://svelte.dev/',
        react: 'https://react.dev/',
        skeleton: 'https://skeleton.dev/',
        express: 'https://expressjs.com/',
        electron: 'https://electronjs.org/',
        tailwind: 'https://tailwindcss.com/',
        'material-design': 'https://m3.material.io/',
        'font-awesome': 'https://fontawesome.com/',
        redux: 'https://redux.js.org/',
        jquery: 'https://jquery.com/',
        git: 'https://git-scm.com/',
        nodejs: 'https://nodejs.org/en',
        babel: 'https://babeljs.io/',
        webpack: 'https://webpack.js.org/',
        vite: 'https://vitejs.dev/',
        postcss: 'https://postcss.org/',
        eslint: 'https://eslint.org/',
        discord: 'https://discord.com/',
        'stack-overflow': 'https://stackoverflow.com/',
        github: 'https://github.com/Azuriru/'
    } as const;

    if (!href) href = DEFAULT_HREF[icon];
</script>

{#if href}
    <a {href} target="_blank" style:--size={size && `${size}px`} style:--mask-size={maskSize && `${maskSize}px`}>
        <div class="mask {icon}" />
    </a>
{:else}
    <div class="mask {icon}" style:--size={size && `${size}px`} style:--mask-size={maskSize && `${maskSize}px`} />
{/if}

<style lang="scss">
    .mask {
        @include flex;
        @include mask(contain);
        background: var(--background);
        background-clip: border-box;
        width: var(--size, 32px);
        height: var(--size, 32px);

        &.divider {
            flex-shrink: 0;
            width: var(--size, 100%);
            height: 2px;
            margin: 12px 0;
            filter: brightness(0.7);

            &.vr {
                margin: 0 4px;
                width: 2px;
                height: var(--size, 100%);
            }
        }
    }
</style>