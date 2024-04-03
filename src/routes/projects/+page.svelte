<script lang="ts">
    import { MaterialSymbol } from '$lib/components';
    import type { MaterialSymbol as MaterialSymbolType } from 'material-symbols';

    type ContactOption = {
        name: MaterialSymbolType;
        url?: string;
        symbol: true;
    } | {
        name: string;
        url?: string;
        symbol?: null;
    };

    const contactOptions: ContactOption[] = [
        {
            name: 'github'
        },
        {
            name: 'discord'
        },
        {
            name: 'stack-overflow'
        },
        {
            name: 'mail',
            symbol: true
        }
    ] as const;
</script>

<div class="home">
    <div class="navigation">
        <a class="navigation-item hoverable" href="/">About</a>
        <a class="navigation-item hoverable" href="/">Skillset</a>
        <a class="navigation-item hoverable" href="/">Projects</a>
    </div>
    <div class="main">
        <div class="bun" />
        <div class="info">
            <div class="header-wrapper">
                About Me
            </div>
            <div class="divider" />
            <div class="text">
                Everyone and their mom has a website nowadays, I may as well join in. Hopefully I'll make it past the "forever under construction" stage, but this is all you're getting for now. I'll try to keep it up to date, but I have the memory fiercely rivaling that of a goldfish, so I may even forget this site exists in its entirety so, don't overestimate me.

                While I'm normally woefully incompetent and deplorably pathetic at just about everything I attempt to do, once in a blue moon I may do something midly considered useful to someone, so do feel free to leave a message.
            </div>
            <div class="divider" />
        </div>
    </div>
    <div class="background" />
    <div class="contact">
        {#each contactOptions as option (option)}
            <div class="contact-option hoverable">
                {#if option.symbol}
                    <MaterialSymbol name={option.name} />
                {:else}
                    <div class={option.name} />
                {/if}
            </div>
        {/each}
    </div>
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

    .home {
        @include flex(1, column);
        @include position(relative);

        .navigation {
            @include flex;
            height: 60px;
            background: $background;
            background-clip: text;
            color: transparent;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            flex-shrink: 0;
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
            @include flex(1, center);

            .bun {
                width: 400px;
                height: 400px;
                mask: url('/assets/bun.png') center / contain no-repeat;
                background: linear-gradient(to right, #05FEFE, #46beff, #7089ff 90%) center/cover fixed;
                mix-blend-mode: unset;
                position: absolute;
                opacity: 0.15;
            }

            .info {
                @include flex(column, centerX);
                padding: 0 80px;

                .divider {
                    flex-shrink: 0;
                    width: 100%;
                    height: 2px;
                    background: $background;
                    margin: 12px 0;
                    filter: brightness(0.7);
                }

                .header-wrapper {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding: 0 12px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .text {
                    padding: 0 12px;
                    line-height: 26px;
                    letter-spacing: 0.5px;
                    white-space: pre-line;
                    text-align: justify;
                }
            }
        }

        .background {
            @include position(absolute, stretch);
            display: none;
            background: $background;
        }

        .contact {
            @include flex;
            @include position(absolute, (
                bottom: 24px,
                right: 24px
            ));
            gap: 0 12px;
            font-size: 30px;
            font-variation-settings: 'wght' 400, 'GRAD' 0, 'opsz' 32;
            background: $background;
            background-clip: text;
            color: transparent;

            .contact-option {
                @include flex(center);
                background: inherit;
                width: 32px;
                height: 32px;

                > div {
                    @include flex;
                    background: inherit;
                    background-clip: border-box;
                    width: 32px;
                    height: 32px;
                    mask-size: 24px;
                    mask-position: center;
                    mask-repeat: no-repeat;

                    &.github {
                        mask-image: url('/assets/github.png');
                    }

                    &.discord {
                        mask-image: url('/assets/discord.png');
                    }

                    &.stack-overflow {
                        mask-image: url('/assets/stack-overflow.png');
                        mask-size: 20px;
                    }
                }
            }

        }
    }
</style>