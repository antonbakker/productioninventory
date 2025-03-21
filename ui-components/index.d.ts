declare module "ui-components" {
  export const StockMutationCreateForm: React.FC<{
    onSuccess: () => void;
    onCancel: () => void;
  }>;
  export const StockMutationUpdateForm: React.FC<{
    onSuccess: () => void;
    onCancel: () => void;
  }>;
}
