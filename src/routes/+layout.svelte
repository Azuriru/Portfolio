<script lang="ts">
    import '../app.css';
    import './+layout.scss';
</script>

<svelte:head>
    <title>Azuriru</title>
    <meta name="title" content="Azuriru's Portfolio" />
    <meta name="description" content="There is a only finite amount of ways to screw something up, so eventually, you'll succeed." />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://azuriru.vercel.app" />
    <meta property="og:title" content="Azuriru" />
    <meta property="og:description" content="There is a only finite amount of ways to screw something up, so eventually, you'll succeed." />
    <meta property="og:image" content="./assets/buntini_logo.png" />

    <meta property="og:site_name" content="Azuriru" />
    <meta property="og:locale" content="en_US" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://azuriru.vercel.app" />
    <meta name="twitter:title" content="Azuriru" />
    <meta name="twitter:description" content="There is a only finite amount of ways to screw something up, so eventually, you'll succeed." />
    <meta name="twitter:image" content="./assets/buntini_logo.png" />
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
                @include flex(center, 1);
                background: inherit;
                height: 100%;
            }
        }
    }
</style>