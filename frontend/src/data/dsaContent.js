// src/data/dsaContent.js

const dsaTopics = [
    {
      id: 'arrays',
      title: 'Arrays',
      description: 'Master array manipulation and basic algorithms',
      lectures: [
        {
          id: 'arrays-intro',
          title: 'Introduction to Arrays',
          videoUrl: 'https://youtu.be/8wmn7k1TTcI?si=jyA21akJbbk1zFvl',
          duration: 3600,
          completed: false
        },
        {
          id: 'arrays-2d',
          title: '2D Arrays',
          videoUrl: 'https://youtu.be/lBL8327gq8I?si=QfoBbH4pVJA2Ge5I',
          duration: 2400,
          completed: false
        }
      ],
      assignments: [
        {
          id: 'two-sum',
          title: 'Two Sum',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/two-sum/',
          completed: false
        },
        {
          id: 'max-subarray',
          title: 'Maximum Subarray',
          difficulty: 'Medium',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/maximum-subarray/',
          completed: false
        },
        {
          id: 'remove-duplicates',
          title: 'Remove Duplicates from Sorted Array',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
          completed: false
        },
        {
          id: 'merge-sorted-array',
          title: 'Merge Sorted Array',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/merge-sorted-array/',
          completed: false
        },
        {
          id: 'plus-one',
          title: 'Plus One',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/plus-one/',
          completed: false
        },
        {
          id: 'rotate-array',
          title: 'Rotate Array',
          difficulty: 'Medium',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/rotate-array/',
          completed: false
        },
        {
          id: 'contains-duplicate',
          title: 'Contains Duplicate',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/contains-duplicate/',
          completed: false
        },
        {
          id: 'single-number',
          title: 'Single Number',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/single-number/',
          completed: false
        },
        {
          id: 'intersection',
          title: 'Intersection of Two Arrays II',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/intersection-of-two-arrays-ii/',
          completed: false
        },
        {
          id: 'move-zeroes',
          title: 'Move Zeroes',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/move-zeroes/',
          completed: false
        }
      ]
    },
    {
        id: 'strings',
        title: 'Strings',
        description: 'Understand string manipulation, pattern matching, and hashing techniques.',
        lectures: [
          {
            id: 'strings-intro',
            title: 'Introduction to Strings',
            videoUrl: 'https://youtu.be/MOSjYaVymcU?si=GfBEflFv85lzrHsz',
            duration: 1800,
            completed: false
          },
          {
            id: 'string-patterns',
            title: 'Pattern Matching Techniques',
            videoUrl: 'https://youtu.be/dSRFgEs3a6A?si=PLv-UW8bviuiExPX',
            duration: 2700,
            completed: false
          },
          {
            id: 'rabin-karp',
            title: 'Rabin-Karp Algorithm',
            videoUrl: 'https://youtu.be/swciWFPq3NE?si=ksBqCtm9eyvjnE-T',
            duration: 2100,
            completed: false
          }
        ],
        assignments: [
          {
            id: 'valid-anagram',
            title: 'Valid Anagram',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/valid-anagram/',
            completed: false
          },
          {
            id: 'longest-palindrome',
            title: 'Longest Palindrome',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/longest-palindrome/',
            completed: false
          },
          {
            id: 'group-anagrams',
            title: 'Group Anagrams',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/group-anagrams/',
            completed: false
          },
          {
            id: 'longest-substring-no-repeat',
            title: 'Longest Substring Without Repeating Characters',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
            completed: false
          },
          {
            id: 'implement-strstr',
            title: 'Implement strStr()',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/implement-strstr/',
            completed: false
          },
          {
            id: 'multiply-strings',
            title: 'Multiply Strings',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/multiply-strings/',
            completed: false
          },
          {
            id: 'longest-palindromic-substring',
            title: 'Longest Palindromic Substring',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/longest-palindromic-substring/',
            completed: false
          },
          {
            id: 'minimum-window-substring',
            title: 'Minimum Window Substring',
            difficulty: 'Hard',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/minimum-window-substring/',
            completed: false
          },
          {
            id: 'edit-distance',
            title: 'Edit Distance',
            difficulty: 'Hard',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/edit-distance/',
            completed: false
          },
          {
            id: 'decode-ways',
            title: 'Decode Ways',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/decode-ways/',
            completed: false
          }
        ]
      },
      
    {
        id: 'binary-search',
        title: 'Binary Search',
        description: 'Efficient searching in sorted data using divide and conquer',
        lectures: [
          {
            id: 'binary-search-intro',
            title: 'Introduction to Binary Search',
            videoUrl: 'https://youtu.be/TbbSJrY5GqQ?si=NjNCqyolN0am3f-N',
            duration: 1800,
            completed: false
          },
          {
            id: 'bs-on-answers',
            title: 'Binary Search on Answers (Advanced)',
            videoUrl: 'https://youtu.be/6WNZQBHWQJs?si=sG0Sg0RwWSqRl5Op',
            duration: 2100,
            completed: false
          }
        ],
        assignments: [
          {
            id: 'binary-search',
            title: 'Binary Search',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/binary-search/',
            completed: false
          },
          {
            id: 'first-last-pos',
            title: 'Find First and Last Position of Element in Sorted Array',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/',
            completed: false
          },
          {
            id: 'search-rotated',
            title: 'Search in Rotated Sorted Array',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
            completed: false
          },
          {
            id: 'min-rotated',
            title: 'Find Minimum in Rotated Sorted Array',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
            completed: false
          },
          {
            id: 'koko-eating',
            title: 'Koko Eating Bananas',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/koko-eating-bananas/',
            completed: false
          },
          {
            id: 'median-of-two',
            title: 'Median of Two Sorted Arrays',
            difficulty: 'Hard',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
            completed: false
          }
        ]
      },{
        id: 'recursion',
        title: 'Recursion',
        description: 'Solve problems by breaking them into smaller subproblems using recursive calls',
        lectures: [
          {
            id: 'recursion-basics',
            title: 'Introduction to Recursion',
            videoUrl: 'https://youtu.be/KEEKn7Me-ms',
            duration: 1800,
            completed: false
          },
          {
            id: 'backtracking',
            title: 'Backtracking using Recursion',
            videoUrl: 'https://youtu.be/s7AvT7cGdSo',
            duration: 2400,
            completed: false
          }
        ],
        assignments: [
          {
            id: 'factorial',
            title: 'Factorial using Recursion',
            difficulty: 'Easy',
            platform: 'Custom',
            link: 'https://www.geeksforgeeks.org/program-for-factorial-of-a-number/',
            completed: false
          },
          {
            id: 'fibonacci',
            title: 'Fibonacci Number',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/fibonacci-number/',
            completed: false
          },
          {
            id: 'subset',
            title: 'Subsets',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/subsets/',
            completed: false
          },
          {
            id: 'subsets-ii',
            title: 'Subsets II',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/subsets-ii/',
            completed: false
          },
          {
            id: 'permutations',
            title: 'Permutations',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/permutations/',
            completed: false
          },
          {
            id: 'permutations-ii',
            title: 'Permutations II',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/permutations-ii/',
            completed: false
          },
          {
            id: 'generate-parentheses',
            title: 'Generate Parentheses',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/generate-parentheses/',
            completed: false
          },
          {
            id: 'word-search',
            title: 'Word Search',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/word-search/',
            completed: false
          },
          {
            id: 'n-queens',
            title: 'N-Queens',
            difficulty: 'Hard',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/n-queens/',
            completed: false
          }
        ]
      },{
        id: 'bit-manipulation',
        title: 'Bit Manipulation',
        description: 'Use bitwise operators to solve problems efficiently at the binary level',
        lectures: [
          {
            id: 'bitwise-basics',
            title: 'Introduction to Bit Manipulation',
            videoUrl: 'https://youtu.be/qQd-ViW7bfk?si=YN-whBLRipEbYpiI',
            duration: 1800,
            completed: false
          },
          {
            id: 'bit-tricks',
            title: 'Bit Tricks & Techniques',
            videoUrl: 'https://youtu.be/nttpF8kwgd4?si=bMICm1kxH8sc25BS',
            duration: 2100,
            completed: false
          }
        ],
        assignments: [
          {
            id: 'single-number',
            title: 'Single Number',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/single-number/',
            completed: false
          },
          {
            id: 'number-complement',
            title: 'Number Complement',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/number-complement/',
            completed: false
          },
          {
            id: 'reverse-bits',
            title: 'Reverse Bits',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/reverse-bits/',
            completed: false
          },
          {
            id: 'hamming-weight',
            title: 'Number of 1 Bits',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/number-of-1-bits/',
            completed: false
          },
          {
            id: 'bitwise-and-range',
            title: 'Bitwise AND of Numbers Range',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/bitwise-and-of-numbers-range/',
            completed: false
          },
          {
            id: 'power-of-two',
            title: 'Power of Two',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/power-of-two/',
            completed: false
          },
          {
            id: 'counting-bits',
            title: 'Counting Bits',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/counting-bits/',
            completed: false
          },
          {
            id: 'missing-number',
            title: 'Missing Number',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/missing-number/',
            completed: false
          },
          {
            id: 'xor-operation',
            title: 'XOR Operation in an Array',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/xor-operation-in-an-array/',
            completed: false
          }
        ]
      },{
        id: 'sliding-window',
        title: 'Sliding Window',
        description: 'Optimize problems involving subarrays or substrings using the sliding window technique',
        lectures: [
          {
            id: 'sliding-window-intro',
            title: 'Introduction to Sliding Window',
            videoUrl: 'https://youtu.be/9kdHxplyl5I?si=snxDyz-sFV2F42Ag',
            duration: 1800,
            completed: false
          },
          {
            id: 'sliding-window-patterns',
            title: 'Sliding Window Patterns',
            videoUrl: 'https://youtu.be/pBWCOCS636U?si=UrY6MrSRCsbHouru',
            duration: 2400,
            completed: false
          }
        ],
        assignments: [
          {
            id: 'max-subarray-sum',
            title: 'Maximum Sum of Subarray of Size K',
            difficulty: 'Easy',
            platform: 'GeeksForGeeks',
            link: 'https://www.geeksforgeeks.org/find-maximum-average-subarray-of-k-length/',
            completed: false
          },
          {
            id: 'longest-substring-no-repeat',
            title: 'Longest Substring Without Repeating Characters',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
            completed: false
          },
          {
            id: 'min-size-subarray-sum',
            title: 'Minimum Size Subarray Sum',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/minimum-size-subarray-sum/',
            completed: false
          },
          {
            id: 'max-consecutive-ones-iii',
            title: 'Max Consecutive Ones III',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/max-consecutive-ones-iii/',
            completed: false
          },
          {
            id: 'longest-repeating-character-replacement',
            title: 'Longest Repeating Character Replacement',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
            completed: false
          },
          {
            id: 'max-fruits',
            title: 'Fruit Into Baskets',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/fruit-into-baskets/',
            completed: false
          },
          {
            id: 'max-vowels-substring',
            title: 'Maximum Number of Vowels in a Substring of Given Length',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/',
            completed: false
          },
          {
            id: 'binary-subarrays-sum',
            title: 'Binary Subarrays With Sum',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/binary-subarrays-with-sum/',
            completed: false
          }
        ]
      },{
        id: 'greedy',
        title: 'Greedy Algorithms',
        description: 'Solve optimization problems by making locally optimal choices',
        lectures: [
          {
            id: 'greedy-intro',
            title: 'Introduction to Greedy Algorithms',
            videoUrl: 'https://youtu.be/bC7o8P_Ste4?si=WeffiguJEdkpIiUJ',
            duration: 1800,
            completed: false
          },
          {
            id: 'greedy-patterns',
            title: 'Common Greedy Patterns',
            videoUrl: 'https://youtu.be/-wqKvpYGg1I?si=gW2cui94yCgWKJtv',
            duration: 2100,
            completed: false
          }
        ],
        assignments: [
          {
            id: 'activity-selection',
            title: 'Activity Selection',
            difficulty: 'Easy',
            platform: 'GeeksForGeeks',
            link: 'https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/',
            completed: false
          },
          {
            id: 'fractional-knapsack',
            title: 'Fractional Knapsack',
            difficulty: 'Medium',
            platform: 'GeeksForGeeks',
            link: 'https://www.geeksforgeeks.org/fractional-knapsack-problem/',
            completed: false
          },
          {
            id: 'jump-game',
            title: 'Jump Game',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/jump-game/',
            completed: false
          },
          {
            id: 'jump-game-ii',
            title: 'Jump Game II',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/jump-game-ii/',
            completed: false
          },
          {
            id: 'gas-station',
            title: 'Gas Station',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/gas-station/',
            completed: false
          },
          {
            id: 'erase-overlap',
            title: 'Non-overlapping Intervals',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/non-overlapping-intervals/',
            completed: false
          },
          {
            id: 'minimum-arrows',
            title: 'Minimum Number of Arrows to Burst Balloons',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/',
            completed: false
          },
          {
            id: 'candy-distribution',
            title: 'Candy',
            difficulty: 'Hard',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/candy/',
            completed: false
          },
          {
            id: 'task-scheduler',
            title: 'Task Scheduler',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/task-scheduler/',
            completed: false
          }
        ]
      },
      
      
      
      
      
    {
      id: 'linked-lists',
      title: 'Linked Lists',
      description: 'Understanding linear data structures',
      lectures: [
        {
          id: 'll-basics',
          title: 'Linked List Basics',
          videoUrl: 'https://youtu.be/Nq7ok-OyEpg?si=y7MwcC76OCGvK76D',
          duration: 3000,
          completed: false
        }
      ],
      assignments: [
        {
          id: 'reverse-ll',
          title: 'Reverse Linked List',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/reverse-linked-list/',
          completed: false
        },
        {
          id: 'merge-two-sorted-lists',
          title: 'Merge Two Sorted Lists',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/merge-two-sorted-lists/',
          completed: false
        },
        {
          id: 'middle-ll',
          title: 'Middle of the Linked List',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/middle-of-the-linked-list/',
          completed: false
        },
        {
          id: 'detect-cycle',
          title: 'Linked List Cycle',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/linked-list-cycle/',
          completed: false
        },
        {
          id: 'remove-nth',
          title: 'Remove Nth Node From End of List',
          difficulty: 'Medium',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
          completed: false
        },
        {
          id: 'reorder-list',
          title: 'Reorder List',
          difficulty: 'Medium',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/reorder-list/',
          completed: false
        },
        {
          id: 'palindrome-ll',
          title: 'Palindrome Linked List',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/palindrome-linked-list/',
          completed: false
        },
        {
          id: 'intersection-ll',
          title: 'Intersection of Two Linked Lists',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/intersection-of-two-linked-lists/',
          completed: false
        },
        {
          id: 'add-two-numbers',
          title: 'Add Two Numbers',
          difficulty: 'Medium',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/add-two-numbers/',
          completed: false
        },
        {
          id: 'swap-nodes',
          title: 'Swap Nodes in Pairs',
          difficulty: 'Medium',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/swap-nodes-in-pairs/',
          completed: false
        }
      ]
    },
    {
      id: 'stacks-queues',
      title: 'Stacks & Queues',
      description: 'Learn LIFO and FIFO data structures and their use cases',
      lectures: [
        {
          id: 'stack-queue-basics',
          title: 'Stacks & Queues Basics',
          videoUrl: 'https://youtu.be/tqQ5fTamIN4?si=XF004IowP1XB7n89',
          duration: 2700,
          completed: false
        }
      ],
      assignments: [
        {
          id: 'valid-parentheses',
          title: 'Valid Parentheses',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/valid-parentheses/',
          completed: false
        },
        {
          id: 'min-stack',
          title: 'Min Stack',
          difficulty: 'Medium',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/min-stack/',
          completed: false
        },
        {
          id: 'implement-queue-using-stacks',
          title: 'Implement Queue using Stacks',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/implement-queue-using-stacks/',
          completed: false
        },
        {
          id: 'daily-temperatures',
          title: 'Daily Temperatures',
          difficulty: 'Medium',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/daily-temperatures/',
          completed: false
        },
        {
          id: 'next-greater-element',
          title: 'Next Greater Element I',
          difficulty: 'Easy',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/next-greater-element-i/',
          completed: false
        },
        {
          id: 'evaluate-reverse-polish-notation',
          title: 'Evaluate Reverse Polish Notation',
          difficulty: 'Medium',
          platform: 'LeetCode',
          link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
          completed: false
        }
      ]
    },
    {
        id: 'heaps',
        title: 'Heaps',
        description: 'Learn about heap data structures and priority queues',
        lectures: [
          {
            id: 'heap-intro',
            title: 'Introduction to Heaps',
            videoUrl: 'https://youtu.be/Qf-TDPr0nYw?si=14VN0bhcj940-m7h',
            duration: 2400,
            completed: false
          },
          {
            id: 'heapify-implementation',
            title: 'Heapify and Heap Operations',
            videoUrl: 'https://youtu.be/cuL8gXCSA58?si=Ls5lGRkKcJ49LlMF',
            duration: 2100,
            completed: false
          },
          {
            id: 'priority-queue',
            title: 'Priority Queue and STL in C++/Java',
            videoUrl: 'https://youtu.be/YDo65gKDRPo?si=WGgk3N14EdztcJLm',
            duration: 1800,
            completed: false
          }
        ],
        assignments: [
          {
            id: 'k-largest',
            title: 'Kth Largest Element in an Array',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/',
            completed: false
          },
          {
            id: 'top-k-frequent',
            title: 'Top K Frequent Elements',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/top-k-frequent-elements/',
            completed: false
          },
          {
            id: 'merge-k-sorted',
            title: 'Merge k Sorted Lists',
            difficulty: 'Hard',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/merge-k-sorted-lists/',
            completed: false
          },
          {
            id: 'sliding-window-median',
            title: 'Sliding Window Median',
            difficulty: 'Hard',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/sliding-window-median/',
            completed: false
          },
          {
            id: 'find-median-stream',
            title: 'Find Median from Data Stream',
            difficulty: 'Hard',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/find-median-from-data-stream/',
            completed: false
          },
          {
            id: 'reorganize-string',
            title: 'Reorganize String',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/reorganize-string/',
            completed: false
          },
          {
            id: 'last-stone-weight',
            title: 'Last Stone Weight',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/last-stone-weight/',
            completed: false
          },
          {
            id: 'minimum-cost-ropes',
            title: 'Minimum Cost of Ropes',
            difficulty: 'Easy',
            platform: 'GeeksForGeeks',
            link: 'https://www.geeksforgeeks.org/connect-n-ropes-minimum-cost/',
            completed: false
          }
        ]
      },
      {
        id: 'binary-trees',
        title: 'Binary Trees',
        description: 'Understand binary tree structure, traversal, and key problems',
        lectures: [
          {
            id: 'bt-intro',
            title: 'Introduction to Binary Trees',
            videoUrl: 'https://youtu.be/9D-vP-jcc-Y?si=VbuseuwftKKjT6-X',
            duration: 2400,
            completed: false
          },
          {
            id: 'bt-traversals',
            title: 'Tree Traversals (Inorder, Preorder, Postorder)',
            videoUrl: 'https://youtu.be/jmy0LaGET1I?si=ywy-hwKS7kZ9TzYJ',
            duration: 2700,
            completed: false
          },
          {
            id: 'bt-levelorder',
            title: 'Level Order Traversal & Variants',
            videoUrl: 'https://youtu.be/EoAsWbO7sqg?si=vhwKB9YEYLBvOlYT',
            duration: 1800,
            completed: false
          }
        ],
        assignments: [
          {
            id: 'max-depth-bt',
            title: 'Maximum Depth of Binary Tree',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
            completed: false
          },
          {
            id: 'diameter-bt',
            title: 'Diameter of Binary Tree',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/diameter-of-binary-tree/',
            completed: false
          },
          {
            id: 'invert-bt',
            title: 'Invert Binary Tree',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/invert-binary-tree/',
            completed: false
          },
          {
            id: 'same-tree',
            title: 'Same Tree',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/same-tree/',
            completed: false
          },
          {
            id: 'symmetrical-tree',
            title: 'Symmetric Tree',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/symmetric-tree/',
            completed: false
          },
          {
            id: 'path-sum',
            title: 'Path Sum',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/path-sum/',
            completed: false
          },
          {
            id: 'max-path-sum',
            title: 'Binary Tree Maximum Path Sum',
            difficulty: 'Hard',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
            completed: false
          },
          {
            id: 'bt-zigzag',
            title: 'Binary Tree Zigzag Level Order Traversal',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/',
            completed: false
          },
          {
            id: 'bt-bottom-left',
            title: 'Find Bottom Left Tree Value',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/find-bottom-left-tree-value/',
            completed: false
          }
        ]
      },
      {
        id: 'binary-search-trees',
        title: 'Binary Search Trees (BST)',
        description: 'Learn BST operations like insertion, deletion, and common problems',
        lectures: [
          {
            id: 'bst-intro',
            title: 'Introduction to BSTs',
            videoUrl: 'https://youtu.be/p7-9UvDQZ3w?si=1ClJrvYxtKHigpi_',
            duration: 1800,
            completed: false
          },
          {
            id: 'bst-operations',
            title: 'Insertion & Deletion in BST',
            videoUrl: 'https://youtu.be/kouxiP_H5WE?si=qR1_jUf6f0d2yU8L',
            duration: 2400,
            completed: false
          },
          {
            id: 'bst-validation',
            title: 'Validate BST and Search Operations',
            videoUrl: 'https://youtu.be/f-sj7I5oXEI?si=BNqPZkeIbL_V2r6e',
            duration: 2100,
            completed: false
          }
        ],
        assignments: [
          {
            id: 'validate-bst',
            title: 'Validate Binary Search Tree',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/validate-binary-search-tree/',
            completed: false
          },
          {
            id: 'search-bst',
            title: 'Search in a Binary Search Tree',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/search-in-a-binary-search-tree/',
            completed: false
          },
          {
            id: 'insert-bst',
            title: 'Insert into a Binary Search Tree',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/insert-into-a-binary-search-tree/',
            completed: false
          },
          {
            id: 'delete-bst',
            title: 'Delete Node in a BST',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/delete-node-in-a-bst/',
            completed: false
          },
          {
            id: 'lowest-common-ancestor-bst',
            title: 'Lowest Common Ancestor of a BST',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
            completed: false
          },
          {
            id: 'kth-smallest',
            title: 'Kth Smallest Element in a BST',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
            completed: false
          },
          {
            id: 'trim-bst',
            title: 'Trim a Binary Search Tree',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/trim-a-binary-search-tree/',
            completed: false
          },
          {
            id: 'range-sum-bst',
            title: 'Range Sum of BST',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/range-sum-of-bst/',
            completed: false
          }
        ]
      },
      {
        id: 'backtracking',
        title: 'Backtracking',
        description: 'Learn to solve constraint satisfaction problems using recursion and decision trees.',
        lectures: [
          {
            id: 'backtracking-intro',
            title: 'Introduction to Backtracking',
            videoUrl: 'https://youtu.be/zg5v2rlV1tM?si=ivRPEfZRfOoGSHfd',
            duration: 1800,
            completed: false
          },
          {
            id: 'n-queens',
            title: 'N-Queens Problem',
            videoUrl: 'https://youtu.be/i05Ju7AftcM?si=YrADRkJwB19RoAWH',
            duration: 2700,
            completed: false
          },
          {
            id: 'sudoku-solver',
            title: 'Sudoku Solver',
            videoUrl: 'https://youtu.be/FWAIf_EVUKE?si=tkR8cC1pUpAO25Yu',
            duration: 2400,
            completed: false
          }
        ],
        assignments: [
          {
            id: 'subsets',
            title: 'Subsets',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/subsets/',
            completed: false
          },
          {
            id: 'subsets-ii',
            title: 'Subsets II',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/subsets-ii/',
            completed: false
          },
          {
            id: 'permutations',
            title: 'Permutations',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/permutations/',
            completed: false
          },
          {
            id: 'permutations-ii',
            title: 'Permutations II',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/permutations-ii/',
            completed: false
          },
          {
            id: 'combination-sum',
            title: 'Combination Sum',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/combination-sum/',
            completed: false
          },
          {
            id: 'combination-sum-ii',
            title: 'Combination Sum II',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/combination-sum-ii/',
            completed: false
          },
          {
            id: 'word-search',
            title: 'Word Search',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/word-search/',
            completed: false
          },
          {
            id: 'palindrome-partitioning',
            title: 'Palindrome Partitioning',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/palindrome-partitioning/',
            completed: false
          },
          {
            id: 'n-queens-assignment',
            title: 'N-Queens',
            difficulty: 'Hard',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/n-queens/',
            completed: false
          },
          {
            id: 'sudoku-solver-assignment',
            title: 'Sudoku Solver',
            difficulty: 'Hard',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/sudoku-solver/',
            completed: false
          }
        ]
      },
      
      
      {
        id: 'graphs',
        title: 'Graphs',
        description: 'Understand graph representations, traversal, and common algorithms like BFS, DFS, Dijkstra, and more.',
        lectures: [
          {
            id: 'graph-basics',
            title: 'Graph Representation and Traversal (BFS & DFS)',
            videoUrl: 'https://youtu.be/M3_pLsDdeuU?si=4cw-Jbtbsdrz59qT',
            duration: 2700,
            completed: false
          },
          {
            id: 'topo-sort',
            title: 'Topological Sort in DAGs',
            videoUrl: 'https://youtu.be/5lZ0iJMrUMk?si=jy-lVisop24tPhMY',
            duration: 1800,
            completed: false
          },
          {
            id: 'dijkstra',
            title: 'Dijkstra’s Algorithm',
            videoUrl: 'https://youtu.be/V6H1qAeB-l4?si=O7RR6yfnT5IR1KZk',
            duration: 2100,
            completed: false
          },
          {
            id: 'detect-cycle',
            title: 'Cycle Detection in Graphs (Directed & Undirected)',
            videoUrl: 'https://youtu.be/BPlrALf1LDU?si=KqBY_2noHN6sIqZt',
            duration: 2500,
            completed: false
          }
        ],
        assignments: [
          {
            id: 'number-of-islands',
            title: 'Number of Islands',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/number-of-islands/',
            completed: false
          },
          {
            id: 'clone-graph',
            title: 'Clone Graph',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/clone-graph/',
            completed: false
          },
          {
            id: 'course-schedule',
            title: 'Course Schedule',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/course-schedule/',
            completed: false
          },
          {
            id: 'graph-valid-tree',
            title: 'Graph Valid Tree',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/graph-valid-tree/',
            completed: false
          },
          {
            id: 'rotting-oranges',
            title: 'Rotting Oranges',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/rotting-oranges/',
            completed: false
          },
          {
            id: 'shortest-path-binary-matrix',
            title: 'Shortest Path in Binary Matrix',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/',
            completed: false
          },
          {
            id: 'network-delay-time',
            title: 'Network Delay Time',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/network-delay-time/',
            completed: false
          },
          {
            id: 'reconstruct-itinerary',
            title: 'Reconstruct Itinerary',
            difficulty: 'Hard',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/reconstruct-itinerary/',
            completed: false
          }
        ]
      },
      {
        id: 'dynamic-programming',
        title: 'Dynamic Programming',
        description: 'Master dynamic programming with problems involving overlapping subproblems and optimal substructure.',
        lectures: [
          {
            id: 'dp-intro',
            title: 'Introduction to Dynamic Programming',
            videoUrl: 'https://youtu.be/tyB0ztf0DNY?si=0dhkLCZpeRaNrawp',
            duration: 2400,
            completed: false
          },
          
          {
            id: 'knapsack-01',
            title: '0/1 Knapsack Problem',
            videoUrl: 'https://youtu.be/GqOmJHQZivw?si=RVA8NZ7p_kViJr8D',
            duration: 2700,
            completed: false
          },
          {
            id: 'lcs',
            title: 'Longest Common Subsequence (LCS)',
            videoUrl: 'https://youtu.be/NPZn9jBrX8U?si=IrDBhJwQoYK9bx6w',
            duration: 2400,
            completed: false
          }
        ],
        assignments: [
          {
            id: 'climbing-stairs',
            title: 'Climbing Stairs',
            difficulty: 'Easy',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/climbing-stairs/',
            completed: false
          },
          {
            id: 'house-robber',
            title: 'House Robber',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/house-robber/',
            completed: false
          },
          {
            id: 'house-robber-ii',
            title: 'House Robber II',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/house-robber-ii/',
            completed: false
          },
          {
            id: 'coin-change',
            title: 'Coin Change',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/coin-change/',
            completed: false
          },
          {
            id: 'longest-palindrome',
            title: 'Longest Palindromic Substring',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/longest-palindromic-substring/',
            completed: false
          },
          {
            id: 'edit-distance',
            title: 'Edit Distance',
            difficulty: 'Hard',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/edit-distance/',
            completed: false
          },
          {
            id: 'maximal-square',
            title: 'Maximal Square',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/maximal-square/',
            completed: false
          },
          {
            id: 'partition-equal-subset',
            title: 'Partition Equal Subset Sum',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/partition-equal-subset-sum/',
            completed: false
          },
          {
            id: 'unique-paths',
            title: 'Unique Paths',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/unique-paths/',
            completed: false
          },
          {
            id: 'target-sum',
            title: 'Target Sum',
            difficulty: 'Medium',
            platform: 'LeetCode',
            link: 'https://leetcode.com/problems/target-sum/',
            completed: false
          }
        ]
      },
      

      
      
            
      
  ];
  
  export default dsaTopics;