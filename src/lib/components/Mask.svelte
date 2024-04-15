<script lang="ts">
    import type { MaskIcon } from './Mask';

    export let icon: MaskIcon;
    export let href: string | null = null;
    export let size: number | null = null;
    export let maskSize: number | null = null;

    if (!href) {
        switch(icon) {
            case 'react':
                href = 'https://react.dev/';
                break;
            case 'svelte':
                href = 'https://svelte.dev/';
                break;
            case 'skeleton':
                href = 'https://skeleton.dev/';
                break;
            case 'redux':
                href = 'https://redux.js.org/';
                break;
            case 'webpack':
                href = 'https://webpack.js.org/';
                break;
            case 'vite':
                href = 'https://vitejs.dev/';
                break;
            case 'tailwind':
                href = 'https://tailwindcss.com/';
                break;
            case 'discord':
                href = 'https://discord.com/';
                break;
            case 'stack-overflow':
                href = 'https://stackoverflow.com/';
                break;
            case 'github':
                href = 'https://github.com/Azuriru/';
                break;
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