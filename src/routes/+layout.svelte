<script lang="ts">
    import './styles.css';
</script>

<svelte:head>
    <title>Azuriru</title>
</svelte:head>

<div class="app">
    <div class="navigation">
        <a class="navigation-item hoverable" href="/">About</a>
        <a class="navigation-item hoverable" href="/">Skillset</a>
        <a class="navigation-item hoverable" href="/projects">Projects</a>
    </div>
    <slot />
</div>

<style lang="scss">
    $background: linear-gradient(to right, #05FEFE, #46beff, #7089ff 90%) center / cover fixed;

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
        @include flex(1, column);
        height: 100%;

        .navigation {
            @include flex(noShrink);
            height: 60px;
            background: $background;
            background-clip: text;
            color: transparent;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            padding: 0 2%;

            @include breakpoint(sm) {
                font-size: 16px;
                padding: 0 10%;
            }

            .navigation-item {
                @include flex(center, grow);
                background: inherit;
                height: 100%;
            }
        }

        .main {
            @include flex(column, center, 1);
            padding: 20px;
            height: 100%;
            overflow-y: auto;

            @include breakpoint(sm) {
                padding: 0 80px;
            }

            @include breakpoint(lg) {
                padding: 0 120px;
            }
        }
    }
</style>