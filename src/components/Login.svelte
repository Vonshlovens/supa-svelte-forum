<script lang="ts">
	import Modal from "./Modal.svelte";

	export let label = 'Login';
	let modal: Modal | null = null;

	const handleLogin = () => {
		if (modal) modal.show();
	};
</script>

<button class="login-button" on:click={handleLogin}>{label}</button>

<Modal bind:this={modal}>
    <h2>Modal title</h2>
    <p>Modal content.</p>
    <button on:click={() => modal?.hide()}>Close</button>
</Modal>


<style>
	.login-button {
		padding: 0px 1.5rem;
		background-color: var(--color-theme-1);
		color: white;
		border: none;
		border-radius: var(--border-radius);
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.login-button:hover {
		background-color: var(--color-green);
	}
</style>
