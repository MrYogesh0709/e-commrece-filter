export const StarRating = ({ value }: { value: number }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 fill-current ${
            index + 1 <= value ? "text-yellow-500" : "text-white"
          }`}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2l3.09 6.32L22 9.54l-5 4.87 1.18 6.84L12 19.77l-6.18 3.48L7 14.41l-5-4.87 6.91-1.22L12 2z"
          />
        </svg>
      ))}
    </div>
  );
};
