<script lang="ts">
	export let showModal: Boolean; 

	let dialog: HTMLDialogElement; 

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<div class="head">
			<button autofocus on:click={() => dialog.close()}>close</button>
		</div>

		<slot />
	</div>
</dialog>

<style>
  /* TODO: Make this not look shit in the distant future*/
	dialog {
		width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		top: calc(50% - 10em);
		left: calc(50% - 16em);
		-webkit-transform: translateX(-50%) translateY(-50%);
		-moz-transform: translateX(-50%) translateY(-50%);
		-ms-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%);
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
		margin-top: 0.5rem;
	}

	.head {
		display: flex;
		justify-content: right;
	}
</style>
