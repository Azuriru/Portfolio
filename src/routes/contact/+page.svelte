<svelte:head>
	<title>Home</title>
</svelte:head>

<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import github from '$lib/assets/logos/github.png';
    import discord from '$lib/assets/logos/discord.png';
</script>

<div class="contact">
    <NavBar/>
    <main>
        <div class="info">
            <div class="splash"></div>
            <div>Contact me</div>
            <div>
                
            </div>
            
            <div class="group">
                <a href="#github">
                    <img src="{github}" alt="github"/>
                </a>
                <a href="#discord">
                    <img src="{discord}" alt="discord"/>
                </a>
            </div>
        </div>
    </main>
</div>

<style lang="scss">
    
</style>