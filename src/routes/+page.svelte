<script lang="ts">
    import { MaterialSymbol, Mask, type MaskIcon } from '$lib/components';
    import { type MaterialSymbol as MaterialSymbolType } from 'material-symbols';
    import { stringify } from '$lib/util/string';

    type ContactOption = {
        name: MaterialSymbolType;
        url: string;
        symbol: true;
    } | {
        name: MaskIcon;
        url: string;
        symbol?: null;
    };
    const contactOptions: ContactOption[] = [
        {
            name: 'github',
            url: 'https://github.com/Azuriru'
        },
        {
            name: 'gitlab',
            url: 'https://gitlab.com/Azuriru'
        },
        {
            name: 'discord',
            url: 'https://discord.com/users/187524257280950272'
        },
        {
            name: 'stack-overflow',
            url: 'https://stackoverflow.com/users/7400301/robyn'
        },
        {
            name: 'mail',
            url: 'mailto:kegumine@gmail.com',
            symbol: true
        }
    ] as const;

    const preferences = [
        ['OS', 'Windows'],
        ['Browser', 'Opera GX'],
        ['IDE', 'VSC'],
        ['Media Players', 'VLC', 'Syncplay'],
        ['Design', 'Figma'],
        ['A/V Editor', 'ffmpeg'],
        ['Image Editor', 'PaintDotNet'],
        ['Social Platforms', 'Discord', 'WhatsApp'],
        ['Languages', 'TypeScript', 'SASS'],
        ['UI Framework', 'Svelte'],
        ['Linters', 'ESLint', 'Stylelint', 'Stylistic'],
        ['Games', 'Marvel Rivals']
    ];

    const iconify = (str: string) => stringify(str).replace(/\./g, '') as MaskIcon;
</script>

<div class="main">
    <div class="buntini" />
    <div class="sections">
        <div class="section me">
            <div class="header">
                About Me
            </div>
            <Mask icon="divider" />
            <div class="content">
                Welcome to my corner of the internet.

                My aliases online include Robyn, Azuriru or Kegumine, depending on whichever isn't taken yet, 'cuz let's be real, finding a consistent, unique username in this day and age with no numbers or weird substitutions is an achievement in an off itself.

                I got into programming at the age of 15 starting out as a humble editor on the platform formerly known as Wikia. There, I picked up HTML, CSS and JS, and decided I liked doing that but without all the Mediawiki guardrails so I continued to pursue it casually.

                Before I knew it, the years had passed and the one thing consistent in my life was always programming. I can get bored of games but I always find myself coming back to programming in the end. For me, it's about constantly building something new, figuring stuff out, and getting a bit better at it every day. It's the achivement that I didn't need to google something to get it done. It's difficult sometimes, but that's part of the fun, I think.

                In my free time, I work on my hobby projects, contribute to open source software, play games with my friends, archive my childhood shows and combat my inner demons over my crippling trading card addiction.
            </div>
        </div>

        <div class="section preferences">
            <div class="header">
                Preferences
            </div>
            <Mask icon="divider" />
            {#each preferences as preference (preference)}
                {@const [type, ...icons] = preference}
                <div class="preference">
                    <span class="type">
                        {type}
                    </span>
                    {#each icons as icon (icon)}
                        <div class="icon">
                            <Mask size={20} icon={iconify(icon)} />
                        </div>
                    {/each}
                </div>
                <Mask icon="divider" />
            {/each}
        </div>

        <div class="section contact">
            <Mask icon="divider" />
            <div class="contact-options">
                {#each contactOptions as option (option)}
                    <div class="contact-option hoverable">
                        {#if option.symbol}
                            <a target="_blank" href={option.url} style="display: flex;">
                                <MaterialSymbol name={option.name} />
                            </a>
                        {:else}
                            <Mask icon={option.name} href={option.url} maskSize={24} />
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
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

    .main {
        @include flex(1, column);
        justify-content: safe center;
        align-items: safe center;
        height: 100%;
        width: 100%;
        padding: 20px 2%;
        overflow-y: auto;

        .buntini {
            @include mask(contain);
            width: 80%;
            height: 90%;
            max-width: 400px;
            background: var(--background);
            position: absolute;
            pointer-events: none;
            opacity: 0.15;
        }

        .sections {
            @include flex(column, centerX);
            @include max(lg);
            margin: auto;

            @include breakpoint(lg) {
                display: grid;
                grid-auto-columns: 3fr 1fr;
                gap: 0 16px;
            }

            .section {
                @include flex(column);

                .header {
                    @include flex(startX, centerY);
                    padding: 0 12px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .content {
                    padding: 0 12px;
                    line-height: 26px;
                    letter-spacing: 0.5px;
                    white-space: pre-line;
                    text-align: justify;
                }

                &.me {
                    grid-column: 1 / 1;

                    @include maxpoint(lg) {
                        margin-bottom: 32px;
                    }
                }

                &.preferences {
                    grid-column: 2 / 2;
                    grid-row: 1 / 3;

                    .header + :global(.divider) {
                        margin: 12px 0 8px;
                    }

                    :global(.divider) {
                        margin: 8px 0;
                    }

                    @include maxpoint(lg) {
                        :global(.divider):last-of-type {
                            margin: 8px 0 12px;
                        }
                    }

                    .preference {
                        @include flex(centerY);
                        padding: 0 12px;
                        font-size: 13px;
                        text-transform: uppercase;
                        letter-spacing: 1px;

                        .type {
                            @include flex(1);
                        }

                        .icon {
                            @include flex(center);
                            @include cube(24px);
                            transition: 0.5s filter, 0.5s transform;
                        }

                        &:hover .icon {
                            filter: brightness(1.2);
                            transform: scale(1.1);
                        }
                    }
                }

                &.contact {
                    @include maxpoint(lg) {
                        :global(.divider) {
                            display: none;
                        }
                    }

                    .contact-options {
                        @include flex(endX);
                        gap: 0 12px;
                        font-size: 30px;
                        font-variation-settings: "wght" 400, "GRAD" 0, "opsz" 32;
                        background: var(--background);
                        background-clip: text;
                        color: transparent;

                        .contact-option {
                            @include flex(center);
                            background: inherit;
                            width: 32px;
                            height: 32px;
                        }
                    }
                }
            }
        }
    }
</style>