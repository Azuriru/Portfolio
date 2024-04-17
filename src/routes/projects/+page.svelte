<script lang="ts">
    import { stringify } from '$lib/util/string';
    import { Mask, type MaskIcon } from '$lib/components';

    type Project = {
        name: string;
        description: string;
        stack: MaskIcon[];
        github?: string;
        url?: string;
    };

    const projects: Project[] = [
        {
            name: 'TiniOS',
            description: 'Designed and built a fully-functional, web-based operating system inspired by the late Windows 7. Features comprehensive window and application management, including individual sessions and interfaces for each application, replicating the core functionalities and user experience of traditional operating systems within a web environment.',
            stack: ['react', 'redux', 'webpack', 'divider vr', 'svelte', 'vite'],
            github: 'TiniOS',
            url: 'https://buntini.vercel.app'
        },
        {
            name: 'Skeletrade',
            description: 'Mock-up for a sophisticated trading platform, meticulously designed to simulate real-world trading scenarios with an intuitive interface',
            stack: ['svelte', 'skeleton', 'vite'],
            url: 'https://azu-skel.vercel.app/trade'
        }
    ] as const;
</script>

<div class="main">
    {#each projects as project (project)}
        {@const { name, description, stack, github, url } = project}
        <div class="project">
            <div class="preview">
                <img src="/assets/projects/{stringify(name)}.png" alt={stringify(name)} />
            </div>
            <div class="info">
                <div class="header">
                    <div class="title">{name}</div>
                    <div class="stack">
                        {#each stack as icon (icon)}
                            <Mask {icon} size={24} />
                        {/each}
                    </div>
                </div>
                <Mask icon="divider" />
                <div class="description">
                    {description}
                </div>
                <div class="quick-links">
                    {#if github}
                        <Mask size={24} href="https://github.com/Azuriru/{github}" icon="github" />
                    {/if}
                    {#if url}
                        <a href={url} class="live-preview">
                            Visit
                        </a>
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    img {
        aspect-ratio: 4/3;
        border: 4px solid rgb(255, 255, 255, 0.1);
    }

    .main {
        @include flex(column, 1, centerY);
        height: 100%;
        width: 100%;
        overflow-y: auto;

        @include breakpoint(md) {
            scroll-snap-type: y mandatory;
        }

        .project {
            @include flex(column, center);
            @include position(relative);
            @include max(lg);
            padding: 20px 2%;
            gap: 30px;

            @include breakpoint(md) {
                flex-direction: row;
                min-height: 100%;
                scroll-snap-align: start;
            }

            &::before {
                @include position(absolute, stretch);
                content: '';
                // background: var(--background);
                z-index: -1;
                clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
                width: 80%;
                opacity: 0.2;
            }

            &:nth-of-type(even) {
                &::before {
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
                    left: auto;
                }

                @include breakpoint(md) {
                    flex-direction: row-reverse;

                    .preview {
                        margin-left: 30px;
                        margin-right: 0px;
                    }
                }
            }

            .preview {
                @include flex();

                @include breakpoint(md) {
                    width: 50%;
                    max-height: 80%;
                }
            }

            .info {
                @include flex(column);

                @include breakpoint(md) {
                    width: 50%;
                }

                .header {
                    @include flex(between, centerY);

                    .title {
                        font-size: 24px;
                        font-variant: small-caps;
                        letter-spacing: 2px;
                    }

                    .stack {
                        @include flex;
                        gap: 6px;
                    }
                }

                .description {
                    line-height: 22px;
                }

                .quick-links {
                    @include flex(endX, centerY);
                    gap: 12px;
                    margin-top: 40px;

                    .live-preview {
                        background: var(--background);
                        padding: 8px 20px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>