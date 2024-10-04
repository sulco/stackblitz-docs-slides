import { defineMonacoSetup } from '@slidev/types';

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      fontSize: 36,
    },
  };
});

// import { defineMonacoSetup } from '@slidev/types';

// export default defineMonacoSetup(async (monaco) => {
//   return {
//     editorOptions: {
//       fontSize: 36,
//     },
//   };
// });
