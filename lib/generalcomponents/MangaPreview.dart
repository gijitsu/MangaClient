import 'package:flutter/material.dart';
import 'dart:math';
import '../MangaSummary.dart';
import '../ReviewSpecPage.dart';

class MangaPreview extends StatefulWidget {
  MangaPreview({
    super.key,
    required this.title,
    required this.totalNumberOfCharacters,
    required this.numberOfCharactersPerLine,
    required this.boxHeight,
    required this.boxWidth,
    required this.coverHeight,
    required this.coverWidth,
    required this.id,
    required this.coverfilename,
    required this.tags,
    required this.description,
    required this.userData,
    required this.types,
  });

  final String title;
  final int totalNumberOfCharacters;
  final int numberOfCharactersPerLine;
  final double boxHeight;
  final double boxWidth;
  final double coverHeight;
  final double coverWidth;
  final String id;
  final String coverfilename;
  final String tags;
  final String description;
  final String types;
  final dynamic userData;

  @override
  State<MangaPreview> createState() => _MangaPreviewState();
}

class _MangaPreviewState extends State<MangaPreview> {
  late final String formattedTitle;
  late final String coverUrl;

  @override
  void initState() {
    super.initState();
    formattedTitle = _formatTitle(widget.title);
    coverUrl =
        'https://proxy.bertmpngn.workers.dev/covers/${widget.id}/${widget.coverfilename}';
  }

  String _formatTitle(String title) {
    int sz = title.length;
    String shortened = title.substring(0, min(widget.totalNumberOfCharacters, sz));
    String result = '';
    for (int i = 0; i < shortened.length; i += widget.numberOfCharactersPerLine) {
      result += shortened.substring(i, min(i + widget.numberOfCharactersPerLine, shortened.length)) + "\n";
    }
    return result;
  }

  void _navigate() {
    if (widget.types == 'Review') {
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => PageReview(
            id: widget.id,
            title: widget.title,
            tags: widget.tags,
            description: widget.description,
            coverArt: coverUrl,
            userData: widget.userData,
          ),
        ),
      );
    } else {
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => MangaSummary(
            id: widget.id,
            title: widget.title,
            tags: widget.tags,
            description: widget.description,
            coverArt: coverUrl,
            userData: widget.userData,
          ),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: _navigate,
      child: SizedBox(
        height: widget.boxHeight,
        width: widget.boxWidth,
        child: Column(
          children: [
            Container(
              height: widget.coverHeight,
              width: widget.coverWidth,
              margin: const EdgeInsets.fromLTRB(2.0, 0.0, 0.0, 0.0),
              decoration: BoxDecoration(
                border: Border.all(width: 2),
                borderRadius: BorderRadius.circular(16.0),
                image: DecorationImage(
                  image: NetworkImage(coverUrl),
                  fit: BoxFit.cover,
                  onError: (exception, stackTrace) {
                    debugPrint("Error loading image: $exception");
                  },
                ),
              ),
            ),
            Flexible(
              child: Container(
                margin: const EdgeInsets.only(right: 5),
                height: 100,
                child: SingleChildScrollView(
                  child: Text(
                    formattedTitle,
                    textAlign: TextAlign.justify,
                    style: const TextStyle(
                      color: Colors.black,
                      fontSize: 13,
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
