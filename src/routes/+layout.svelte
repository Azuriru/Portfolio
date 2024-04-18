<script lang="ts">
    import '../app.css';
    import './+layout.scss';
</script>

<svelte:head>
    <title>Azuriru</title>
</svelte:head>

<div class="app">
    <div class="navigation">
        <a class="navigation-item hoverable" href="/">About</a>
        <a class="navigation-item hoverable" href="/skillset">Skillset</a>
        <a class="navigation-item hoverable" href="/projects">Projects</a>
    </div>
    <slot />
</div>

<style lang="scss">
    .hoverable {
        cursor: pointer;
        user-select: none;
        filter: brightness(0.7);
        transition: 0.5s filter;

        &:hover {
            filter: brightness(1);
        }
    }

    .app {
        @include flex(1, column, centerY);
        height: 100%;

        .navigation {
            @include flex(noShrink);
            @include max(lg);
            width: 100%;
            height: 60px;
            background: var(--background);
            background-clip: text;
            color: transparent;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            padding: 0 2%;

            @include breakpoint(sm) {
                font-size: 16px;
            }

            .navigation-item {
                @include flex(center, grow);
                background: inherit;
                height: 100%;
            }
        }
    }
</style>