import React from 'react';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ title, description, icon, action }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {icon && <div className="text-mid-gray mb-4 opacity-50">{icon}</div>}
      <h3 className="text-xl font-bold font-cairo text-near-black mb-2">{title}</h3>
      {description && <p className="text-mid-gray text-sm mb-6 max-w-md">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
};
