<script lang="ts">
  import Todo from '$lib/components/Todo.svelte';
  import {
    todosPending,
    todosInProgress,
    todosDone,
    userStore,
    getUser,
    createTodo,
  } from '$lib/stores';
  import { generateUserWithTodos, generateTodoCreate } from '$lib/generator';
  let quantity = 1;
  let selected: string = '';
  const generateHandler = () => {
    generateUserWithTodos(quantity);
  };

  const generateToSelectedUser = () => {
    const user = getUser(selected);
    const todo = generateTodoCreate(user.id);
    createTodo(user.id, todo);
  };
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="flex flex-row items-center justify-evenly">
  <h1 class="m-4">FWDP Collaboration Project - Todos</h1>
  <input type="number" bind:value={quantity} />
  <button on:click={generateHandler}>Generate User</button>
  <select bind:value={selected}>
    {#each $userStore as user}
      <option value={user.id}>
        {user.firstName}
      </option>
    {/each}
  </select>
  <button on:click={generateToSelectedUser} disabled={!selected}>Generate</button>
</div>

<div class="flex flex-col md:flex-row">
  <div class="basis-1/3 border-red-500 border">
    <div class="flex flex-col">
      <h1 class="heading">Pending</h1>
    </div>
    <div>
      {#each $todosPending as todo}
        <Todo {todo} />
      {/each}
    </div>
  </div>
  <div class="basis-1/3 border-red-500 border">
    <div class="flex flex-col">
      <h1 class="heading">In Progress</h1>
    </div>
    <div>
      {#each $todosInProgress as todo}
        <Todo {todo} />
      {/each}
    </div>
  </div>
  <div class="basis-1/3 border-red-500 border">
    <div class="flex flex-col">
      <h1 class="heading">Done</h1>
    </div>
    <div>
      {#each $todosDone as todo}
        <Todo {todo} />
      {/each}
    </div>
  </div>
</div>

<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<style>
  .heading {
    @apply text-center text-[1.5rem] font-bold text-slate-400;
  }
</style>