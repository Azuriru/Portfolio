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

<div class="main">
    <div class="bun" />
    <div class="info">
        <div class="header-wrapper">
            About Me
        </div>
        <div class="divider" />
        <div class="text">
            Welcome to my corner of the internet. My journey into the world of web development began somewhat early— at the age of 15, to be exact. What started as a curious exploration has blossomed into a full-fledged passion and profession. Programming is not just a job for me, it's what I love doing. It's about constantly building something new, figuring stuff out, and getting a bit better at it every day.

            Specializing in frontend development, I have dedicated myself to crafting engaging, intuitive, and visually appealing digital experiences. My toolkit is filled with the latest technologies and methodologies in UI/UX design, ensuring that each project is not only aesthetically pleasing but also user-friendly and accessible.

            While my primary focus lies in bringing designs to life through code, my capabilities extend into the backend. This versatility allows me to understand and contribute to the full spectrum of web development, ensuring a cohesive and seamless experience from start to finish.
        </div>
        <div class="divider" />
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

    .main {
        @include flex(1, center);
        padding: 20px;
        height: 100%;
        overflow-y: auto;

        @include breakpoint(sm) {
            padding: 0 80px;
        }

        @include breakpoint(lg) {
            padding: 0 120px;
        }

        .bun {
            width: 80%;
            height: 90%;
            max-width: 400px;
            mask: url('/assets/bun.png') center / contain no-repeat;
            background: linear-gradient(to right, #05FEFE, #46beff, #7089ff 90%) center/cover fixed;
            position: absolute;
            pointer-events: none;
            opacity: 0.15;
        }

        .info {
            @include flex(column, centerX);
            margin: auto;

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

            .contact {
                @include flex(endX);
                gap: 0 12px;
                font-size: 30px;
                font-variation-settings: 'wght' 400, 'GRAD' 0, 'opsz' 32;
                background: $background;
                background-clip: text;
                color: transparent;

                @include maxpoint(md) {
                    margin-bottom: 12px;
                }

                @include breakpoint(md) {
                    @include position(absolute, (
                        bottom: 24px,
                        right: 24px
                    ));
                }

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
    }
</style>