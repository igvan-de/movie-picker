<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  align-items: center;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #46d6d4;
}

.item {
  margin-top: 0;
  padding: 0.4rem 0 1rem calc(160px / 2);
}

i {
  top: calc(50% - 25px);
  left: -26px;
  position: absolute;
  border: 1px solid #3c3c3ca8;
  border-radius: 8px;
  width: 50px;
  height: 50px;
}

.item:before {
  content: ' ';
  border-left: 1px solid #3c3c3ca8;
  position: absolute;
  left: 0;
  bottom: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item:after {
  content: ' ';
  border-left: 1px solid #3c3c3ca8;
  position: absolute;
  left: 0;
  top: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item:first-of-type:before {
  display: none;
}

.item:last-of-type:after {
  display: none;
}
</style>
