<script lang="ts">

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Modal from '../components/basecomponents/Modal.svelte';
	import Login from '../components/Login.svelte';
	import type { State, LoggedInUserDetails } from '../lib/images/types/userdetails';
	import { userDetails } from '../lib/images/types/store';

	let showModal = false;

	let user:State;
	
	userDetails.subscribe((value) => {
		user = value
	});

	onMount(async () => {
		// read token from sessionStorage
        //await get_user();
    });
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
		</ul>
		<button on:click={() => (showModal = true)}>Login</button>
		<Modal bind:showModal>
			<Login/>
		</Modal>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		background: rgba(255, 255, 255, 0.7);
		width: 100%;
		justify-content: space-between;
		padding: var(--padding-standard);
	}

	ul {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		gap: 0.3rem;
	}

	li[aria-current='page'] {
		position: relative; /* Make sure the li element can position the ::before element */
		color:var(--color-theme-1);
	}

	li[aria-current='page']::before {
		content: ''; /* Required to create the pseudo-element */
		position: absolute; /* Position it absolutely relative to the li element */
		bottom: -3px; /* Position it at the bottom of the li element */
		left: 0; /* Align it to the left edge of the li element */
		width: 100%; /* Ensure the underline spans the entire width */
		height: 2px; /* Thickness of the underline */
		background-color: var(--color-theme-1); /* Color of the underline */
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
