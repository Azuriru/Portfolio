<script lang="ts">
    import { type MaskIcon } from '../types/Mask';

    export let icon: MaskIcon;
    export let href: string;
</script>

<a {href}>
    <div class="mask {icon}" />
</a>

<style lang="scss">
    .mask {
        @include flex;
        @include mask(24px);
        background: var(--background);
        background-clip: border-box;
        width: 32px;
        height: 32px;
    }
</style>