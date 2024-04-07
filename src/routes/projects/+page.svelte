<script lang="ts">
    import { stringify } from '$lib/util/string';

    type Framework = 'react' | 'svelte' | 'skeleton' | 'redux' | 'webpack' | 'vite' | 'tailwind' | 'divider';
    type Project = {
        name: string;
        description: string;
        frameworks: Framework[];
        github?: string;
        url?: string;
    };

    const projects: Project[] = [
        {
            name: 'TiniOS',
            description: 'Designed and built a fully-functional, web-based operating system inspired by the late Windows 7. Features comprehensive window and application management, including individual sessions and interfaces for each application, replicating the core functionalities and user experience of traditional operating systems within a web environment.',
            frameworks: ['react', 'redux', 'webpack', 'divider', 'svelte', 'vite'],
            github: 'TiniOS',
            url: 'https://buntini.vercel.app'
        },
        {
            name: 'Skeletrade',
            description: 'Mock-up for a sophisticated trading platform, meticulously designed to simulate real-world trading scenarios with an intuitive interface',
            frameworks: ['svelte', 'skeleton', 'vite'],
            url: 'https://azu-skel.vercel.app/trade'
        }
    ] as const;
</script>

<div class="main">
    {#each projects as project (project)}
        {@const { name, description, frameworks, github, url } = project}
        <div class="project">
            <div class="preview">
                <img src="/assets/projects/{stringify(name)}.png" alt={stringify(name)} />
            </div>
            <div class="info">
                <div class="header">
                    <div class="title">{name}</div>
                    <div class="frameworks">
                        {#each frameworks as framework (framework)}
                            {#if framework === 'divider'}
                                <div class="framework-divider" />
                            {:else}
                                <div class="framework {framework}" />
                            {/if}
                        {/each}
                    </div>
                </div>
                <div class="divider" />
                <div class="description">
                    {description}
                </div>
                <div class="quick-links">
                    {#if github}
                        <a href="https://github.com/Azuriru/{github}" class="repository">
                            <div class="github" />
                        </a>
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
        width: 100%;
        height: auto;
    }

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
        @include flex(column, 1, startY);
        height: 100%;
        overflow-y: auto;

        @include breakpoint(md) {
            scroll-snap-type: y proximity;
        }

        .project {
            @include flex(column, center);
            @include position(relative);
            padding: 20px;

            @include breakpoint(sm) {
                padding: 30px;
            }

            @include breakpoint(md) {
                flex-direction: row;
                min-height: 100%;
                scroll-snap-align: start;
            }

            &::before {
                @include position(absolute, stretch);
                content: '';
                background: var(--background);
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
            }

            .preview {
                @include flex();

                @include maxpoint(md) {
                    margin-bottom: 20px;
                }

                @include breakpoint(md) {
                    width: 60%;
                    margin-right: 20px;
                }

                border: 4px solid rgb(255, 255, 255, 0.1);
            }

            .info {
                @include flex(column, noShrink);

                @include breakpoint(md) {
                    width: 40%;
                }

                .header {
                    @include flex(between, centerY);

                    .title {
                        font-size: 24px;
                        font-variant: small-caps;
                        letter-spacing: 2px;
                    }

                    .frameworks {
                        @include flex;
                        gap: 6px;

                        .framework {
                            flex-shrink: 0;
                            width: 24px;
                            height: 24px;
                            mask: center / contain no-repeat;
                            background: var(--background);
                        }

                        .framework-divider {
                            flex-shrink: 0;
                            width: 2px;
                            height: 24px;
                            background: var(--background);
                            margin: 0 4px;
                        }

                        .react {
                            mask-image: url('/assets/frameworks/react.svg');
                        }

                        .redux {
                            mask-image: url('/assets/frameworks/redux.svg');
                        }

                        .skeleton {
                            mask-image: url('/assets/frameworks/skeleton.svg');
                        }

                        .svelte {
                            mask-image: url('/assets/frameworks/svelte.svg');
                        }

                        .tailwind {
                            mask-image: url('/assets/frameworks/tailwind.svg');
                        }

                        .vite {
                            mask-image: url('/assets/frameworks/vite.svg');
                        }

                        .webpack {
                            mask-image: url('/assets/frameworks/webpack.svg');
                        }
                    }
                }

                .divider {
                    flex-shrink: 0;
                    width: 100%;
                    height: 2px;
                    background: var(--background);
                    margin: 12px 0;
                }

                .description {
                    line-height: 22px;
                }

                .quick-links {
                    @include flex(endX, centerY);
                    gap: 12px;
                    margin-top: 40px;

                    .github {
                        background: var(--background);
                        background-clip: border-box;
                        width: 24px;
                        height: 24px;
                        mask: url('/assets/github.png') center / contain no-repeat;
                    }

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