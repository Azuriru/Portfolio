<script lang="ts">
    import type { MaskIcon } from './Mask';

    export let icon: MaskIcon;
    export let href: string | null = null;
    export let size: number | null = null;
    export let maskSize: number | null = null;

    if (!href) {
        switch(icon) {
            case 'react':
                return href = 'https://react.dev/';
            case 'svelte':
                return href = 'https://svelte.dev/';
            case 'skeleton':
                return href = 'https://skeleton.dev/';
            case 'redux':
                return href = 'https://redux.js.org/';
            case 'webpack':
                return href = 'https://webpack.js.org/';
            case 'vite':
                return href = 'https://vitejs.dev/';
            case 'tailwind':
                return href = 'https://tailwindcss.com/';
            case 'discord':
                return href = 'https://discord.com/';
            case 'stack-overflow':
                return href = 'https://stackoverflow.com/';
            case 'github':
                return href = 'https://github.com/Azuriru/';
        }
    }
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

        .divider {
            margin: 0 4px;
        }
    }
</style>