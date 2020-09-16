<style>
  .input-block {
    margin: 0 0 15px 0;
  }
  .label {
    display: block;
    font-weight: 600;
    font-size: 0.8em;
  }
  .input {
    font-size: 1em;
    display: block;
  }
</style>
<div class="input-block">
  <div class="label">
    <slot name="label"></slot>
  </div>
  <div class="input">
    <slot name="input"></slot>
  </div>
</div>
