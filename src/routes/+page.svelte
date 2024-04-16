<script lang="ts">
    import { MaterialSymbol, Mask, type MaskIcon } from '$lib/components';
    import { type MaterialSymbol as MaterialSymbolType } from 'material-symbols';

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
            name: 'discord',
            url: 'https://discord.com/users/187524257280950272'
        },
        {
            name: 'stack-overflow',
            url: 'https://stackoverflow.com/users/7400301/robyn'
        },
        {
            name: 'mail',
            url: 'mailto:gamemoderatorobyn@gmail.com',
            symbol: true
        }
    ] as const;
</script>

<div class="main">
    <div class="buntini" />
    <div class="info">
        <div class="header-wrapper">
            About Me
        </div>
        <Mask icon="divider" />
        <div class="text">
            Welcome to my corner of the internet. My journey into the world of web development began somewhat early— at the age of 15, to be exact. What started as a curious exploration has blossomed into a full-fledged passion and profession. Programming is not just a job for me, it's what I love doing. It's about constantly building something new, figuring stuff out, and getting a bit better at it every day.

            Specializing in frontend development, I have dedicated myself to crafting engaging, intuitive, and visually appealing digital experiences. My toolkit is filled with the latest technologies and methodologies in UI/UX design, ensuring that each project is not only aesthetically pleasing but also user-friendly and accessible.

            While my primary focus lies in bringing designs to life through code, my capabilities extend into the backend. This versatility allows me to understand and contribute to the full spectrum of web development, ensuring a cohesive and seamless experience from start to finish.
        </div>
        <Mask icon="divider" />
        <div class="contact">
            {#each contactOptions as option (option)}
                <div class="contact-option hoverable">
                    {#if option.symbol}
                        <a target="_blank" href={option.url} style="display: flex">
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
        @include flex(1, center);
        @include max(lg);
        padding: 20px 2%;
        height: 100%;
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

        .info {
            @include flex(column, centerX);
            margin: auto;

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
                background: var(--background);
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
                }
            }
        }
    }
</style>