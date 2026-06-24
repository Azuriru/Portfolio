<script lang="ts">
    import type { MaskIcon, Misc } from './Mask';

    export let icon: MaskIcon;
    export let href: string | null = null;
    export let size: number | null = null;
    export let maskSize: number | null = null;

    const DEFAULT_HREF: Record<Exclude<MaskIcon, Misc>, string> = {
        // Languages
        html: 'https://www.w3.org/html/',
        css: 'https://www.w3.org/Style/CSS/Overview.en.html',
        javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        typescript: 'https://www.typescriptlang.org/',
        sass: 'https://sass-lang.com/',

        // Frameworks
        svelte: 'https://svelte.dev/',
        react: 'https://react.dev/',
        nextjs: 'https://nextjs.org/',
        vue: 'https://vuejs.org/',
        nuxt: 'https://nuxt.com/',
        express: 'https://expressjs.com/',
        electron: 'https://electronjs.org/',

        // Design
        tailwind: 'https://tailwindcss.com/',
        shadcn: 'https://ui.shadcn.com/',
        skeleton: 'https://skeleton.dev/',
        'material-design': 'https://m3.material.io/',
        'font-awesome': 'https://fontawesome.com/',
        lucide: 'https://lucide.dev/',

        // Libraries
        redux: 'https://redux.js.org/',
        jquery: 'https://jquery.com/',

        // Tools
        git: 'https://git-scm.com/',
        nodejs: 'https://nodejs.org/en',
        babel: 'https://babeljs.io/',
        webpack: 'https://webpack.js.org/',
        vite: 'https://vitejs.dev/',
        alchemy: 'https://www.alchemy.com/',
        postcss: 'https://postcss.org/',
        eslint: 'https://eslint.org/',
        stylelint: 'https://stylelint.io/',
        stylistic: 'https://eslint.style/',

        // Platforms
        github: 'https://github.com/Azuriru/',
        gitlab: 'https://gitlab.com/Azuriru/',
        discord: 'https://discord.com/',
        whatsapp: 'https://web.whatsapp.com/',
        'stack-overflow': 'https://stackoverflow.com/',

        // Software
        windows: 'https://massgrave.dev/', // 'https://www.microsoft.com/en-us/windows/',
        'opera-gx': 'https://www.opera.com/gx/',
        vsc: 'https://code.visualstudio.com/',
        figma: 'https://www.figma.com/',
        vlc: 'https://www.videolan.org/',
        syncplay: 'https://syncplay.pl/',
        paintdotnet: 'https://paint.net/',
        ffmpeg: 'https://www.ffmpeg.org/',
        'marvel-rivals': 'https://www.marvelrivals.com/'
    } as const;

    if (!href) href = DEFAULT_HREF[icon];
</script>

{#if href}
    <a
        {href}
        title={icon}
        target="_blank"
        style:--size={size && `${size}px`}
        style:--mask-size={maskSize && `${maskSize}px`}
    >
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
        will-change: filter;

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