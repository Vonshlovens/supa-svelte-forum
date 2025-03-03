<script>
	import Counter from './Counter.svelte';
	import immortal from '$lib/images/immortal.svg';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={immortal} type="image/svg+xml" />
				<img src={immortal} alt="Immortal" />
			</picture>
		</span>

		Welcome to the Immortal Forum
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		text-align: center;
	}
	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 200px;
		margin-bottom: 20px;
	}

	.welcome img {
		position: absolute;
		width: 200%;
		height: 200%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		display: block;
	}
</style>
