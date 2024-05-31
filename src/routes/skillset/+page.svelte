<script lang="ts">
    import { stringify } from '$lib/util/string';
    import { Mask, type MaskIcon } from '$lib/components';

    const technologies = [
        ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Sass'],
        ['Svelte', 'React', 'Next.js', 'Skeleton', 'Express', 'Electron'],
        ['Tailwind', 'Material Design', 'Font Awesome'],
        ['Redux', 'jQuery'],
        ['Git', 'Node.js', 'Babel', 'Webpack', 'Vite', 'PostCSS', 'ESlint']
    ] as const;

    const iconify = (str: string) => stringify(str).replace(/\./g, '') as MaskIcon;
</script>

<div class="main">
    <div class="header">Skills</div>
    <Mask icon="divider" />
    <div class="technologies" style="--size: 48px">
        {#each technologies.flat() as tech (tech)}
            <div class="tech">
                <Mask icon={iconify(tech)} />
                <div class="name">
                    {tech}
                </div>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .main {
        @include flex(column, 1);
        @include max(lg);
        justify-content: safe center;
        align-items: safe center;
        height: 100%;
        width: 100%;
        padding: 20px 2%;
        overflow-y: auto;

        .header {
            font-size: 24px;
            font-variant: small-caps;
            letter-spacing: 2px;
        }

        .technologies {
            @include flex(center, wrap);
            @include position(relative);

            .tech {
                @include flex(column, center);
                width: 120px;
                height: 120px;
                transition: 0.5s filter, 0.5s transform;

                &:hover {
                    filter: brightness(1.2);
                    transform: scale(1.1);
                }

                .name {
                    margin-top: 12px;
                    font-size: 12px;
                }
            }
        }
    }
</style>