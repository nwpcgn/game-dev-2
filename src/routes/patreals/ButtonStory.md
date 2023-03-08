

## Button

```html
<button type="button" class="btn-blue">
  Button Regular Blue
</button>
```


```
button.btn-blue {
  --tw-bg-opacity: 1;
  background-color: rgb(var(--tw-color-sky-500) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(var(--tw-color-white) / var(--tw-text-opacity));
}

button.btn-blue:active {
  --tw-bg-opacity: 1;
  background-color: rgb(var(--tw-color-sky-600) / var(--tw-bg-opacity));
}

button.btn-blue {
  font-weight: var(--tw-font-weight-bold);
  text-transform: uppercase;
  font-size: var(--tw-font-size-sm);
  line-height: var(--tw-line-height-5);
  padding-left: var(--tw-size-6);
  padding-right: var(--tw-size-6);
  padding-top: var(--tw-size-3);
  padding-bottom: var(--tw-size-3);
  border-radius: var(--tw-border-radius-default);
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),
    0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

button.btn-blue:hover {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

button.btn-blue {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

button.btn-blue:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

button.btn-blue {
  margin-right: var(--tw-size-1);
  margin-bottom: var(--tw-size-1);
  transition-timing-function: linear;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
```